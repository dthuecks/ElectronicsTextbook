import numpy as np
import matplotlib.pyplot as plt

# Set parameters
VS, VT, A, tmin, tmax, nt = [5, .75, 2, 0, 30, 1000] # Volts, volts, volts, seconds, seconds, number

# Create starting data arrays
t = np.linspace(tmin,tmax,nt)
Vin = A*np.sin(t)
Vout = VS*np.ones_like(t)
VTarr = VT*np.ones_like(t)
hyst_stage = np.zeros_like(t)

# Find the indices at which V_in crosses V_threshhold
# Note: Without the extra '+1', we would find the index
# immediately before the transition.
signs = np.sign(np.abs(Vin)-VT)
wh = np.where(np.diff(signs))[0]+1

# Check each V_in transition point to see if V_out changes state.
# If it does change state, change it for all times after this index.
for i in wh:
    if (np.sign(Vin[i])!=np.sign(Vout[i])):
        Vout[i:]*= -1
        
# Plot V_in and V_out vs time
plt.figure(1)
vticks1 = [-VS, VS, -VT, VT,0]
vticklabels1 = ['$-V_S$','$V_S$','$-V_T$','$V_T$',0]
plt.plot(t,Vin,label=r'$V_\text{in}$')
plt.plot(t,Vout,'r--',label=r'$V_\text{out}$')
plt.plot(t,VTarr,'g:',t,-VTarr,'g:',t,0*t,'k')
plt.xlim([tmin,tmax])
plt.xticks([])
plt.yticks(vticks1, vticklabels1)
plt.xlabel('Time')
plt.ylabel('Voltage')
plt.legend()

# Plot hysteresis curve, showing V_out vs V_in
plt.figure(2)
vinticks = [-VT, VT,0]
vinticklabels = ['$-V_T$','$V_T$',0]
voutticks = [-VS, VS, 0]
voutticklabels = ['$-V_S$','$V_S$',0]
plt.plot(Vin[wh[1]:wh[3]],Vout[wh[1]:wh[3]],'b')
plt.plot(Vin[wh[3]:wh[5]],Vout[wh[3]:wh[5]],'r--')
plt.xticks(vinticks, vinticklabels)
plt.yticks(voutticks, voutticklabels)
plt.xlabel(r'$V_\text{in}$')
plt.ylabel(r'$V_\text{out}$')

np.savetxt('schmitt-trigger.txt', np.column_stack((t,Vin,Vout)), comments='# ', header='VS, VT, A, tmin, tmax, nt = [5, .75, 2, 0, 30, 1000] # Volts, volts, volts, seconds, seconds, number\n Time Vin Vout')