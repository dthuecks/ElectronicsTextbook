# Clear all variables that may be present from previous code run on this page.
globals().clear()

import numpy as np
import matplotlib.pyplot as plt

plt.close('all') # Close all open figures

# Define input parameters
VF = 0.6 # Forward turn-on voltage for diode
A = 5 # volts; amplitude for sinusoidal signal
w = 20 # rad/s; frequency of sinusoidal input voltage
t0 = 0 # initial time
t1 = 1 # final time
nt = 500 # number of points in time array

# Create time and V_in arrays
t = np.linspace(t0,t1,nt);
Vin = A*np.sin(w*t);

# Arrays resulting from analytical work
VD = Vin.copy() # V_D = V_in when the diode is off
VD[VD>VF] = VF # Find all times when VD>VF from the previous step. Diode should instead be on.
Vout = Vin - VD # V_out from KVL for all times.

plt.figure(1)
plt.plot(t,Vin, 'b', label='$V_{in}$')
plt.plot(t,Vout,'r-.', label='$V_{out}$')
plt.plot(t,VD,'k--',label='$V_D$')
plt.legend()
plt.xlabel('Time (s)')
plt.ylabel('Voltage (V)')
plt.show()