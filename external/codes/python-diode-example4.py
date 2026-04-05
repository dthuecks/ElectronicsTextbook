# Clear all variables that may be present from previous code run on this page.
globals().clear()

import numpy as np
import scipy.constants as sc
import matplotlib.pyplot as plt

plt.close('all') # Close all open figures

# Initialize arrays
t = np.linspace(0,1,500)
Vin_array = 5*np.sin(20*t)
Vout = np.zeros(np.size(t))
VD = np.zeros(np.size(t))

I0, R1, R2, R3, T = [1e-13, 1e3, 2e3, 3e3, 293] # Circuit parameters
target = 1.0e-8 # Target tolerance for Newton's method

for i1 in range(np.size(t)):
    Vin = Vin_array[i1]
    
    # Initial guesses for the solution
    V = 1.0

    # Main loop
    error = 1.0
    while error > target:
        f = (1+R1/R2+R1/R3)*I0*(np.exp(sc.e*V/(sc.k*T))-1)+V*(1/R2+1/R3)-Vin/R3
        fp = (1+R1/R2+R1/R3)*sc.e*I0/(sc.k*T)*np.exp(sc.e*V/(sc.k*T)) + (1/R2+1/R3)
        DeltaV = f/fp
        V -= DeltaV
        error = DeltaV
    VD[i1]=V

ID = I0*(np.exp(sc.e*VD/(sc.k*T))-1) # Diode current; exponential diode equation
Vout = Vin_array - ID*R1 - VD # Kirchhoff loop law

# Plot voltage changes across components
plt.figure(1)
plt.subplot(2,1,1)
plt.plot(t,Vin_array,'b',label='$V_{in}$') 
plt.plot(t,Vout,'r-.',label='$V_{out}$')  
plt.plot(t,VD,'k--',label='$V_D$')
plt.xlabel('Time (s)')
plt.ylabel('Voltage (V)')
plt.legend()

# Plot circuit currents
plt.subplot(2,1,2)
plt.plot(t,ID*1000,'k--',label='$I_1$')
plt.plot(t,(Vout/R3- ID)*1000,'r-.',label='$I_2$')
plt.plot(t,Vout/R3*1000,label='$I_3$')
plt.xlabel('Time (s)')
plt.ylabel('Current (mA)')
plt.legend()
plt.show()