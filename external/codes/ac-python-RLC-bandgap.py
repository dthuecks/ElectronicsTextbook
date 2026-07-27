# Clear all variables that may be present from previous code executions
globals().clear()

import numpy as np
import scipy.linalg as linalg
import matplotlib.pyplot as plt

plt.close('all'); # Close all open figures

f = np.logspace(0,8,1000)
w_arr = 2*np.pi * f
Vin = 1 # Volts
R, C, L = [1000, 1e-9, 1e-3] # Ohms, Farads, Henrys

Gv = np.zeros(np.size(w_arr));
phi = np.zeros(np.size(w_arr));

for i in range(np.size(w_arr)):
    w = w_arr[i];
    A = np.array([[1, -1, -1],[-R, 1j/(w*C), 0],[0, -1j/(w*C), -1j*w*L]]);
    v = np.array([0, -Vin, 0]);
    
    x = linalg.solve(A,v);
    Gv[i] = np.abs(x[0]*R/Vin) # Voltage Gain where I1 = x[0]
    phi[i] = np.angle(x[0]*R) # Phase of output (assuming Vin is at zero phase)

fig, axs = plt.subplots(2,1,sharex=True)

axs[0].semilogx(f,Gv)
axs[1].semilogx(f,phi)
# set labels -- Note that $\\phi$ is used in the ylabel below in order to avoid deprication warning
plt.setp(axs[0], ylabel='Voltage Gain')
plt.setp(axs[1], xlabel='Frequency (Hz)', ylabel='$\\phi_{out}-\\phi_{in}$', yticks=[-np.pi/2,0,np.pi/2], yticklabels=['$-\\pi/2$', 0, '$\\pi/2$']) 
plt.show()