# Clear all variables that may be present from previous code run on this page.
globals().clear()

import numpy as np
import scipy.constants as sc
import matplotlib.pyplot as plt

plt.close('all') # Close all open figures

t = np.linspace(0,1,500);
Vin_array = 5*np.sin(20*t);
Vout = np.zeros(np.size(t));
Varr = np.zeros(np.size(t));

R, T, I0 = [1e4, 293, 3.0e-12] # in Ohms, Kelvin, Amps
VT = sc.k * T / sc.e;

target = 1.0e-8 # User-defined tolerance for final answer

for i1 in range(np.size(t)):
    Vin = Vin_array[i1]

    # Initial guesses for the solution
    V = 3.0

    # Main loop
    error = 1.0
    while error > target:
        f = Vin - V - I0*R*(np.exp(sc.e*V/(sc.k*T))-1);
        fp = -1-I0*R*sc.e/(sc.k*T)*np.exp(sc.e*V/(sc.k*T))
        DeltaV = f/fp
        V -= DeltaV
        error = DeltaV
    Vout[i1]=Vin-V
    Varr[i1]=V

plt.figure(1)
plt.plot(t,Vin_array, 'b', label='$V_{in}$')
plt.plot(t,Vout,'r-.', label='$V_{out}$')
plt.plot(t,Varr,'k--',label='$V_D$')
plt.legend()
plt.xlabel('Time (s)')
plt.ylabel('Voltage (V)')
plt.show()