var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-introduction-review",
  "level": "1",
  "url": "sec-introduction-review.html",
  "type": "Section",
  "number": "1.1",
  "title": "Review from Introductory Physics",
  "body": " Review from Introductory Physics  Electrical devices are powered by electricity, the movement of charges (which we call current ) through a circuit. These charges move due to voltage differences applied by batteries or power supplies. Thus, if we intend to understand the behavior of electrical circuits, we must first remember what we learned in our introductory physics course.  In the presence of charged objects, the space around the objects is altered. This alteration can be represented as a vector field which we call the electric field (which has SI units of V\/m). The electric field at a position relative to a point charge source is given by where is the permitivity of free space (a constant of nature). The electric field has SI units of V\/m. While the electric field is a useful construct, it can be convenient to represent this space modification using a scalar field called the electric potential (with SI units of Volts). For a point charge , the electric potential some distance away from the source charge is . When discussing circuits, this scalar field is often called the voltage . The relationship linking these two representations is described by . While both representations have their uses, voltage will be much more commonly used and referenced when analyzing the behavior of electrical circuits.  In circuits, voltage differences lead to electric fields that cause charges to move. Current quantifies the movement of charge through circuit components. More precisely, current is the amount of charge passing by some point in a circuit per unit time, or . In many materials (e.g. metals), positive charges are largely immobile since they are associated with the nuclei of atoms in a material. Thus, electrons are typically the charge carrier in circuits, constituting the current. Unfortunately, there was still much unknown about atomic theory when initial experiments on electricity were conducted, with the consequence that the direction of current is defined to be in the direction that positive charge carriers would be moving if they were responsible for the current. This means that current often has a direction that is opposite to the direction in which the actual charge carriers are moving.  "
},
{
  "id": "sec-introduction-review-2",
  "level": "2",
  "url": "sec-introduction-review.html#sec-introduction-review-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "current voltage "
},
{
  "id": "sec-introduction-review-3",
  "level": "2",
  "url": "sec-introduction-review.html#sec-introduction-review-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "electric field electric potential voltage "
},
{
  "id": "sec-introduction-review-4",
  "level": "2",
  "url": "sec-introduction-review.html#sec-introduction-review-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Current "
},
{
  "id": "sec-circuit-schematics",
  "level": "1",
  "url": "sec-circuit-schematics.html",
  "type": "Section",
  "number": "1.2",
  "title": "Circuit Schematic: A Visual Model of a Circuit",
  "body": " Circuit Schematic: A Visual Model of a Circuit  Before we can jump into analyzing the behavior of a circuit, we must first identify features of the circuit that are likely to contribute most importantly to the overall circuit behavior to within some desired degree of accuracy. Such a process is an example of model building, a common activity in physics and one that is a bit of an art form. Model building requires practioners to balance model simplicity (a desirable quality that simplifies circuit analysis) with the model's ability to represent the real behavior of a physical circuit if it were to be built. A model that is too complex, it may become difficult, costly (in time or money), or impossible to use in generating predictions of circuit behavior. On the other hand, a model that is too simple may leave out important qualities, leading to predictions that have little semblance to reality. Finding the proper balance between simplicity and completeness is an activity that practitioners learn over time and through experience.  A circuit schematic , like the one shown in is a visual model of a circuit. Rather than presenting an artistic representation or photograph of a real circuit, a circuit schematic represents the circuit construction and includes enough information about the behavior of circuit components and the connections between them while leaving out information that is unimportant for our particular purposes.         In , circuit components are represented using standard symbols that are defined in . We find an AC voltage source, a resistor, a capacitor, and an inductor, all labeled with variable names. Lines in the circuit schematic represent wire connections between components. If a dot is present where two lines intersect, it indicates a junction where two wires that are connected. Arrows (and associated labels) are used to represent the current present in various parts of the circuit.  Circuit Symbols    Symbol Name Notes      wire      junction       Battery   SI Unit: Volt (V),  Long line is + terminal       AC voltage source SI Unit: Volt (V)      DC current source SI Unit: Ampere (A)      Resistor SI Unit: Ohm ( )      Capacitor SI Unit: Farad (F)      Inductor SI Unit: Henry (H)      Ground   Physically connected to Earth.  Acts as charge source\/sink.       Common   Circuit reference.  Assume V=0 at common.       "
},
{
  "id": "sec-circuit-schematics-3",
  "level": "2",
  "url": "sec-circuit-schematics.html#sec-circuit-schematics-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circuit schematic "
},
{
  "id": "fig-intro-schematic",
  "level": "2",
  "url": "sec-circuit-schematics.html#fig-intro-schematic",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "      "
},
{
  "id": "tbl-intro-circuit-symbols",
  "level": "2",
  "url": "sec-circuit-schematics.html#tbl-intro-circuit-symbols",
  "type": "Table",
  "number": "1.2.2",
  "title": "Circuit Symbols",
  "body": " Circuit Symbols    Symbol Name Notes      wire      junction       Battery   SI Unit: Volt (V),  Long line is + terminal       AC voltage source SI Unit: Volt (V)      DC current source SI Unit: Ampere (A)      Resistor SI Unit: Ohm ( )      Capacitor SI Unit: Farad (F)      Inductor SI Unit: Henry (H)      Ground   Physically connected to Earth.  Acts as charge source\/sink.       Common   Circuit reference.  Assume V=0 at common.     "
},
{
  "id": "sec-dc-kirchhoff",
  "level": "1",
  "url": "sec-dc-kirchhoff.html",
  "type": "Section",
  "number": "2.1",
  "title": "Kirchhoff’s Laws",
  "body": " Kirchhoff's Laws  There are three laws that will make up the foundation of our DC circuit analysis. In truth, these laws will extend beyond the DC circuit analysis presented in this chapter, but we will leave discussion of these extensions to future chapters.  Kirchhoff's Current Law (KCL), or Junction Law, relies on conservation of charge to say that the rate at which charges enter a junction must be equivalent to the rate at which charges leave the junction for a scenario as pictured in . The KCL can also be represented mathematically as where for currents leaving a node and for currents entering a node.    A circuit junction.   Another conservation law, the conservation of energy, is ultimately responsible for what we call Kirchhoff's Voltage Law (KVL), or the Loop Law. If one walks around any loop in a circuit (such as that shown in ), the sum of the voltage changes as one moves in a single direction around a complete loop must add up to zero, or When using the KVL equation, voltages rise as one crosses a voltage source from the negative terminal to positive terminal and voltages fall in the opposite direction. Additionally, voltages fall across a resistor in the direction of current and rise in the opposite direction.  A circuit loop.     The last rule we'll introduce here is Ohm's Law. For the situation shown in , the magnitude of the voltage change across a resistor is dependent on the resistance and the magnitude of current in the resistor according to where . A note on signs: When using Ohm's law, and actually represent and . It is conventional to use Ohm's law to relate magnitudes of to . The signs on each variable are linked by the fact that current is directed from high to low voltage. So, if current is in the direction indicated in , then .   Ohm's Law circuit.    EXAMINE THE VOLTAGE DIVIDER CIRCUIT.  "
},
{
  "id": "dc-kcl",
  "level": "2",
  "url": "sec-dc-kirchhoff.html#dc-kcl",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "  A circuit junction.  "
},
{
  "id": "dc-kvl",
  "level": "2",
  "url": "sec-dc-kirchhoff.html#dc-kvl",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " A circuit loop.   "
},
{
  "id": "dc-ohm",
  "level": "2",
  "url": "sec-dc-kirchhoff.html#dc-ohm",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "  Ohm's Law circuit.  "
},
{
  "id": "sec-dc-voltage-source-symbol",
  "level": "1",
  "url": "sec-dc-voltage-source-symbol.html",
  "type": "Section",
  "number": "2.2",
  "title": "Voltage Source Symbols",
  "body": " Voltage Source Symbols  In the following section, we will analyze our first circuit. Before we analyze this circuit, let's first take a moment to discuss a notation convention. It is popular convention to label batteries or voltage supplies with the symbol with an identifying subscript as we have with the symbol in the next section. Using this convention, one might hypothetically say V even though what is really meant is that Volts across the battery terminals. Though this notation may require a small bit of additional care of the reader, we will use this popular convention of labeling batteries and voltage sources with a rather than . When discussing voltage changes across any other type of circuit element, we will return to the notation.  "
},
{
  "id": "sec-dc-series_parallel",
  "level": "1",
  "url": "sec-dc-series_parallel.html",
  "type": "Section",
  "number": "2.3",
  "title": "Series and Parallel Resistors",
  "body": " Series and Parallel Resistors  Let's begin by applying Kirchhoff's laws and Ohm's law to the circuit shown in . Circuit example.   At node A, we apply the KCL to find The KVL can then be applied to Loop I and Loop II. Examining Loop I first, we will start in the lower left corner and traverse the loop in the direction indicated by the arrow. Traversing this loop has us pass through battery from the negative to positive terminal, resulting in . The next component that we encounter is , which we travel across in the direction of current, so Ohm's law tells us that the voltage falls by in the direction of current. Likewise, the voltage falls by as we travel across in the direction of current on the way back to our starting point. The KVL for Loop 1 will thus give where there are negative signs in front of and because voltage falls by these amount in the direction that we've traversed the loop. A similar application of the KVL to Loop II gives .  Often, voltages provided by batteries (or a DC voltage source) and the resistances are known as these were the physical components assembled into the circuit. Thus, - represent a series of equations that must be solved to determine currents in .  Rather than solving this system of equations for the three currents, we will instead perform some intermediate analysis to investigate the behavior of resistor combinations. Starting with , we can see that . Resistors and are considered to be in series . Resistors are in series if the current in one resistor must be the same current in the other series resistors. In this case, and are in series because must be the current through each of the resistors since there is no junction between them. We see that the voltage drop across the pair of series resistors is just where , meaning that resistors in series act together as a single resistor that has a resistance equal to the sum of the individual series resistances. This relationship holds for any number of resistors that are in series such that . This means that currents , , and will have identical values in all three circuits displayed in    Original circuit (left) is simplified into an intermediate circuit (center) by combining series resistors and into effective resistance . The circuit is further simplified (right) by combining parallel resistors and into effective resistance .  If we now examine the simplified circuit in b, we can see that both and both have the same voltage drop across them so that . These expressions can be inserted into to find so that . This has the form of Ohm's Law where and combine into an equivalent resistance . We say that resistors and are in parallel because the potential difference across each resistor must be identical as each side of the resistors are connected together by wires. An equivalent resistance for a combination of any number of parallel resistors can be found using .  "
},
{
  "id": "dc-circuit1",
  "level": "2",
  "url": "sec-dc-series_parallel.html#dc-circuit1",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": "Circuit example.   "
},
{
  "id": "sec-dc-series_parallel-4",
  "level": "2",
  "url": "sec-dc-series_parallel.html#sec-dc-series_parallel-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "series "
},
{
  "id": "sec-dc-analysis",
  "level": "1",
  "url": "sec-dc-analysis.html",
  "type": "Section",
  "number": "2.4",
  "title": "Circuit Analysis Methods",
  "body": " Circuit Analysis Methods   In the following sections, we will analyze the DC circuit found in using a variety of different methods. Each of these methods can be useful in different circumstances, so these exercises are meant to introduce you to a variety of tools that will remain in your circuit-analysis toolbox for future use.  The circuit that will be analyzed using multiple different methods over the course of the following sections.       Analysis: Circuit Reduction  In the method of circuit reduction, we use the rules of series and parallel resistors to find all currents present in the circuit. We will start by drawing the circuit and labeling all currents as in a.  Circuit reduction for .   In our first simplification, we note that and are in parallel, so . With that simplification done, we now find that , , and are in series, so . Ohm's law can be used to find  where is the voltage change across . We must also check the direction of . When examining a circuit, you must sometimes guess at the directions of currents. If you guess correctly and the guessed current direction flows from high to low potential, then your value for current will be positive. If you guessed incorrectly at the outset, you will instead find that the value for current will be negative. In this situation, we note that the direction pictured does indeed pass through from high to low potential given how terminals are connected directly to battery terminals. Thus, the value that we calculate for should be positive. So, .  Now, in order to find currents and , we'll have to find the voltage changes across and . We can do this by taking our calculated value for and using Ohm's Law in (left). Thus, we find that . In other words, so that . Once we have , we can use Ohm's law to find and  . If we define , then .    Analysis: Branch Method  In the branch method , we perform the following steps:  Draw the circuit.  Define a current for each circuit segment that may have a different current. Use your intuition to try to guess the correct directions for the currents. Don't worry about guessing wrong. It is just important to clearly identify your assumed direction for each current.  Write out KCL equations at nodes. Remove duplicate or redundant equations. Note that the number of independent KCL equations is one fewer than the number of junctions present in the circuit.  Write down KVL equations for enough loops to include all circuit components at least once.  Solve the system of KCL and KVL equations for all unknown currents. If you were wrong in your initial guesses for any current directions, those currents will just come out with negative values.  Use Ohm's law to find voltage changes through each resistor and use those changes to find the voltage at any point of interest in the circuit.  To analyze the circuit in using the mesh method, we draw the circuit and define currents as in .  Branch method circuit analysis.   Examining the KCL at junction A and the KVL for loops I and II, we find the following equations You can now find values for , , and using your favorite method for solving systems of equations. We will illustrate several such methods.  Solving Branch Method Equations - Analytic   Solve - for the three unknown currents using analytic methods.    Solving Equation for , , and inserting into Equations and , we get which can be rearranged into . Solving the top equation for , we find which can be substituted into the bottom equation to give . Plugging in values for known components, we can solve for . Once we have a value for , we use the equations above to calculate and then , finding . Then, just as in the circuit reduction method, Ohm's law can be used to find .     Solving Branch Method Equations - Python  Solve - for the three unknown currents using Python.   The Python programming language can be used to solve a system of equations through the use of the scipy.linalg package. If presented with an equation where is a matrix and and are vectors, we can solve the equation using x = scipy.linalg.solve(A,v) .  As an example, let's start with the system of equations -  . These equations can be re-expressed as a matrix equation if we remember the rules of matrix multiplication (see for details). The resulting matrix equation is expressed as . Since we have numerical values for and all resistors, we can plug these into the matrices. This matrix equation is in the necessary form for x = scipy.linalg.solve(A,v) . The results of this method are identical to the analytic result.     Solving Branch Method Equations - Sympy  Solve - for the three unknown currents using Python and SymPy.   One can also use functionality from SymPy, the symbolic math package for Python, to solve systems of linear equations. As before, becomes which can be solved symbolically with the following code: This analysis gives the result which simplifies to the results of the previous methods when numerical values are inserted for and resistances.     Solving Branch Method Equations - Gaussian elimination   Solve - for the three unknown currents using Gaussian elimination.    We can also use a linear algebra method called Gaussian elimination to solve the matrix equation . Gaussian elimination relies on two facts:  If we multiply one row of and the same row of by some constant , the solutions for remain unchanged.  Any linear combination of two rows will give a new correct row.  Using the two rules above, our goal is to find an equivalent such that . Often, the first step in using Gaussian elimination is to divide the first row by . In this case, both and remain unchanged since . Next, we'll subtract from row 2 to get . Then, we'll subtract from row 3 to get . If we now divide row 2 by , we get Subtracting from row 3 will eliminate while leaving  . Then, divide row 3 by to get which simplifies to . Now, we can read off an expression for and subsequently calculate and  .       Analysis: Mesh Method  In the mesh method , we perform the following steps:  Draw the circuit.  Define mesh currents . Each current passes around a complete loop. Every component must be in at least one loop. Typically, it is best to use the simplest loops possible. The total current passing through any point in the circuit is the sum of the mesh currents through that point. Choose and clearly indicate each current loop's direction; the direction chosen doesn't really matter as long as it is clearly defined.  Write down a KVL equation for each loop. If there are multiple mesh currents passing through a resistor, the voltage change is the sum of voltage changes for each mesh current through that component. The signs for each voltage drop contribution result in voltage drops for the mesh currents aligned with the direction we go around the loop for the loop law, while they result in voltage rises for the mesh currents aligned against the direction we go around the loop when creating the loop law equation.  Solve the system of KVL equations for all unknown mesh currents.  The current through any point in the circuit is the sum of mesh currents through that point. Note that two mesh currents through a point on the circuit will add together with opposite signs.  Use Ohm's law to find voltage changes through each resistor and use those changes to find the voltage at any point of interest in the circuit.  One of the benefits of the mesh method over the branch method is that there are fewer equations to solve in the resulting system of equations (since there is no KCL equation), though this comes at the cost of having to add multiple mesh currents together to find the total current through any point in the circuit.  The analysis begins with drawing the circuit and defining our mesh currents as demonstrated in .  Mesh method circuit analysis.   Then, the KVL equations associated with mesh currents and are which can be arranged into the form . Once again, your favorite method for solving systems of equations can be used to find the mesh currents mA and mA. Therefore, the current passing through , , and is mA clockwise, the current through is mA downward, and the current through is mA downward. With these current values, we can once again use the same Ohm's law method from the previous sections to find the voltages at any location in the circuit.  Note that the mesh method leaves us with a system of two equations to solve and compare that to the system of three equations that the branch method provided. This simplification comes at a cost, though. In the branch method, the variables representing currents are the actual currents passing through each part of the circuit. In the mesh method, we instead solve for mesh currents. The real currents can then be calculated as sums and differences of these mesh currents.   "
},
{
  "id": "dc-solve-circuit",
  "level": "2",
  "url": "sec-dc-analysis.html#dc-solve-circuit",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " The circuit that will be analyzed using multiple different methods over the course of the following sections.   "
},
{
  "id": "dc-reduction-circuit",
  "level": "2",
  "url": "sec-dc-analysis.html#dc-reduction-circuit",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " Circuit reduction for .   "
},
{
  "id": "subsec-dc-analysis-branch-2",
  "level": "2",
  "url": "sec-dc-analysis.html#subsec-dc-analysis-branch-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "branch method Gaussian elimination "
},
{
  "id": "subsec-dc-analysis-mesh-2",
  "level": "2",
  "url": "sec-dc-analysis.html#subsec-dc-analysis-mesh-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mesh method mesh currents "
},
{
  "id": "dc-mesh-circuit",
  "level": "2",
  "url": "sec-dc-analysis.html#dc-mesh-circuit",
  "type": "Figure",
  "number": "2.4.8",
  "title": "",
  "body": " Mesh method circuit analysis.   "
},
{
  "id": "sec-dc-superposition",
  "level": "1",
  "url": "sec-dc-superposition.html",
  "type": "Section",
  "number": "2.5",
  "title": "Superposition Theorem",
  "body": " Superposition Theorem   The superposition theorem isn't often used on its own in circuit analysis, but is the foundation for some other very important rules and theorems. Before stating the superposition theorem, we must first establish a few definitions.  First, linear circuit elements are circuit elements for which the relationship between voltage and current is a linear function. Examples of linear circuit elements include resistors, capacitors, and inductors. A linear circuit contains only linear elements.  With these definitions in place, the superposition theorem states that for any linear circuit containing more than one independent source, the circuit can be solved for one source while turning the others `off'. Then, this can be repeated for each source and add the results together. When we talk about turning a voltage source off, we mean that we replace it in our analysis with a wire. Turning a current source off means replacing the current source with a break in the circuit. The superposition theorem in electronics arises directly from use of the superposition principle in electricity and magnetism.   "
},
{
  "id": "sec-dc-superposition-2-2",
  "level": "2",
  "url": "sec-dc-superposition.html#sec-dc-superposition-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear circuit elements linear circuit "
},
{
  "id": "sec-dc-thevenin",
  "level": "1",
  "url": "sec-dc-thevenin.html",
  "type": "Section",
  "number": "2.6",
  "title": "Thévenin’s and Norton’s Theorems",
  "body": " Thévenin's and Norton's Theorems         Circuits controlling devices that you use every day are often very complex with complicated scematic diagrams. This complexity can make it difficult to analytically determine the behavior of the output voltage and current when this complex circuit is connected to an external load. DEFINE LOAD. NOTE SOMEWHERE THAT .  In this section, we introduce two theorems that allow us to replace a complicated circuit with a simplified circuit. For the moment, we will limit ourselves to resistor-based DC circuits and will generalize these theorems next chapter.   Thévenin's theorem states that any complicated circuit containing comprised of only ideal voltage sources, ideal current sources, and resistors will demonstrate a relationship between and that is identical to the relationship demonstrated by a Thévenin equivalent circuit containing a single voltage source (the Thévenin voltage ) in series with a single resistance (the Thévenin resistance ) for any load (DEFINE!) connected across the circuit output. Similarly, Norton's theorem states that any complicated circuit containing comprised of only ideal voltage sources, ideal current sources, and resistors will demonstrate a relationship between and that is identical to the relationship demonstrated by a Norton equivalent circuit containing a single current source (the Norton current ) in parallel with a single resistance (the Norton resistance ) for any load (DEFINE!) connected across the circuit output.  Below, we will start by analyzing the Thévenin and Norton equivalent circuits and determine the relationship between and . We will then show that any complicated circuit containing only ideal sources and resistors must demonstrate this same behavior, thus proving these two theorems.    Behavior of Thévenin\/Norton circuits  Applying Kirchhoff's voltage law to the Thévenin equivalent circuit in , we find that . Rearrangement of this equation shows , a linear relationship between and .  Application of Kirchhoff's current law to the Norton equivalent circuit in shows where Ohm's law was used to express the current through in terms of . Rearrangement of this equation shows that which again demonstrates a linear relationship between and .  If both Thévenin's theorem and Norton's theorem are to be true, then Equations and must be equivalent. This can only be true if and . The linear relationship between and for these circuits is shown in . Here we see that the slope is the negative inverse of and . The Thévenin voltage is equal to when (an open-circuit where nothing is connected across the output terminals), and the Norton current equals when the outputs are shorted by a wire (making ).   I-V plot for linear circuits. The norton current is equal to when the output is shorted ( ). We call this the short-circuit current . The Thevenin voltage is given by when . This occurs when there is no load placed across the output terminals, so we call it the open-circuit voltage .    In the next section, we show that must represent the behavior of any circuit comprised of ideal voltage sources, ideal current sources, and resistors.    Proof of Thevenin's and Norton's Theorems  Let's assume that inside of a box we have a circuit with two leads exiting the box ( ). The circuit in the box is comprised of a complicated network of resistors , DC voltage sources , and ideal current sources . We will also assume unknown currents that are dependent on the size of the voltage difference across the output terminals of the circuit.      Let's assume that if we apply the branch circuit analysis method, we end up with independent junction law equations and loop law equations. Each junction law equation will have the form where and have values of +1, -1, or 0 depending on whether the currents and are entering, exiting, or not present at a junction and is an index counting over KCL equations. Here, is the current that passes out of our circuit, through some external load, and back into our circuit.  We will also end up with independent loop law equations. All loops chosen for KVL analysis must be absent known current sources . Since the current is already known on circuit legs containing circuit sources, so this restriction will not cost us anything. Each of these loop law equations will have the form . The variables have values of either +1, or -1 depending on the battery orientation relative to the direction travelled around the loop, or a value of 0 for batteries not present in a given loop. Variables and have units of resistance (since each nonzero term in these sums represents a voltage change described by Ohm's Law). Here, the index counts over KVL equations.  These instances of and instances of can be re-expressed as a matrix equation . First, let's rearrange these equations so that all unknowns are on the left side of the equation and all of the source terms are on the right . We can express these equations in the form if we let , . Now, every element in matrix is either a unitless number or a function of resistances only. More to the point, there is no voltage or current dependence in . If we multiply both sides of our matrix equation by , we get . The solution that is most important to us is as we wish to examine the relationship between output current and voltage. If we actually perform the calculations necessary to invert , use matrix multiplication to find an expression for , and then group source terms and rename constants multiplying each source ( ), the resulting solution is of the form where all and terms are functions of resistances only and are thus constants. This result demonstrates that is a linear function of with slope and a y-intercept that equals the two summations on the right side of the equation. So, we have now shown that any circuit comprised of solely linear circuit elements is itself a linear circuit.  At this point, it is important to discuss that the internal behavior of the complicated circuit and simplified circuit are different. EXPAND ON THIS THOUGHT.    Finding Thevenin Equivalent Circuits  Given a complicated circuit, we can use the procedure provided in the proof above to find Thevenin and Norton equivalent circuit parameters.   Thevenin Example - Matrix Approach   Coming soon.  Here, we develop and , convert them into a matrix equation, and use Python to solve for the Thevenin and Norton equivalent circuit parameters.    Coming soon    If one wishes to find Thevenin and Norton equivalent parameters analytically, it is often easier to follow this procedure:   Use circuit analysis to find the open-circuit voltage which is equivalent to when nothing is connected externally between output terminals A and B. Then, .    Find which is equivalent to when all internal source voltages and currents are `turned off'.   Turning a source `off' means replacing voltage sources with wires and replacing current sources with breaks.    This method works as a consequence of application of the superposition theorem to the complicated circuit.       Use your values for and to find      Let's look at an example.   Thevenin Example - No Linear Algebra   Find , , and for the circuit in .                  Find Assume an open circuit between terminals A and B such that . Using mesh analysis, we find or . Then . Thus, the voltage difference across is . Since , there is no voltage change across , but there is an additional voltage change across so that the open-circuit voltage between the output terminals is .       Find : If we turn off all sources in our circuit, we are left to find the resistance between terminals A and B in . Looking for series and parallel resistances, we find that . Plugging in resistance values, we find that .   Find : The Norton current mA.    Sometimes, one does not have a circuit schematic but only has the physical circuit. In this case, a digital multimeter can be used to physically perform the following procedure:   Find the open-circuit voltage which is equivalent to when nothing is connected externally between output terminals A and B. Then, .    Find the short-circuit current which is the current from terminal A to terminal B when an external wire connects the two outputs. Then .    The Thevenin resistance (which is equivalent to the Norton resistance) is then .     Look at section 41.6 to add color to example blocks. also section 28.2 and similar. xsl stylesheets   "
},
{
  "id": "dc-messy-thevenin",
  "level": "2",
  "url": "sec-dc-thevenin.html#dc-messy-thevenin",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec-dc-thevenin-2-4",
  "level": "2",
  "url": "sec-dc-thevenin.html#sec-dc-thevenin-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Thévenin's theorem Norton's theorem "
},
{
  "id": "fig-dc-thevenin-lineplot",
  "level": "2",
  "url": "sec-dc-thevenin.html#fig-dc-thevenin-lineplot",
  "type": "Figure",
  "number": "2.6.2",
  "title": "",
  "body": " I-V plot for linear circuits. The norton current is equal to when the output is shorted ( ). We call this the short-circuit current . The Thevenin voltage is given by when . This occurs when there is no load placed across the output terminals, so we call it the open-circuit voltage .   "
},
{
  "id": "dc-thevenin-box",
  "level": "2",
  "url": "sec-dc-thevenin.html#dc-thevenin-box",
  "type": "Figure",
  "number": "2.6.3",
  "title": "",
  "body": "   "
},
{
  "id": "subsec-finding-thevenin-3",
  "level": "2",
  "url": "sec-dc-thevenin.html#subsec-finding-thevenin-3",
  "type": "Example",
  "number": "2.6.4",
  "title": "Thevenin Example - Matrix Approach.",
  "body": " Thevenin Example - Matrix Approach   Coming soon.  Here, we develop and , convert them into a matrix equation, and use Python to solve for the Thevenin and Norton equivalent circuit parameters.    Coming soon   "
},
{
  "id": "subsec-finding-thevenin-6",
  "level": "2",
  "url": "sec-dc-thevenin.html#subsec-finding-thevenin-6",
  "type": "Example",
  "number": "2.6.5",
  "title": "Thevenin Example - No Linear Algebra.",
  "body": " Thevenin Example - No Linear Algebra   Find , , and for the circuit in .                  Find Assume an open circuit between terminals A and B such that . Using mesh analysis, we find or . Then . Thus, the voltage difference across is . Since , there is no voltage change across , but there is an additional voltage change across so that the open-circuit voltage between the output terminals is .       Find : If we turn off all sources in our circuit, we are left to find the resistance between terminals A and B in . Looking for series and parallel resistances, we find that . Plugging in resistance values, we find that .   Find : The Norton current mA.   "
},
{
  "id": "sec-dc-batteries",
  "level": "1",
  "url": "sec-dc-batteries.html",
  "type": "Section",
  "number": "2.7",
  "title": "Application of Thevenin Equivalent Cicruits: Batteries",
  "body": " Application of Thevenin Equivalent Cicruits: Batteries   Batteries have a complicated voltage and resistance internally, as do power supplies, function generators, and other voltage sources that may be present in a circuit. All can be represented by a Thevenin equivalent circuit.  The Thevenin equivalent representation of a battery can help us understand the behavior of batteries when connected to resistive loads as pictured in . Here, the chemical reactions inside the battery maintain an internal voltage difference . There is an internal resistance that means that the actual battery terminals that we have access to provide a voltage difference of .      If we connect a resistive load with resistance , we find that we have a voltage divider circuit where . So, if is very large , we call this a light resistive load because . Conversely, if is very small , we call this a heavy resistive load because .  The analysis above shows why the voltage between battery terminals can droop lower than their rated voltage when a heavy resistive load is connected to it. We will discuss this effect in greater detail in .   "
},
{
  "id": "dc-batteries-thevenin",
  "level": "2",
  "url": "sec-dc-batteries.html#dc-batteries-thevenin",
  "type": "Figure",
  "number": "2.7.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec-dc-uses",
  "level": "1",
  "url": "sec-dc-uses.html",
  "type": "Section",
  "number": "2.8",
  "title": "DC Circuit Uses",
  "body": " DC Circuit Uses      "
},
{
  "id": "sec-ac-sinusoidal",
  "level": "1",
  "url": "sec-ac-sinusoidal.html",
  "type": "Section",
  "number": "3.1",
  "title": "Sinusoidal Signals",
  "body": " Sinusoidal Signals      In this chapter, we will focus on circuit behavior that results from sinusoidal signals where is the angular frequency, is the frequency, is the period, and are the phase of the signals at time . (We could have used the sine function instead of cossine, but these are the same function but shifted from each other by radians in their arguments.)  While it may seem like focusing on a sinusoidal signal with a single frequency will limit the applicability of the analysis we develop in this chapter, this is not actually the case. Fourier's Theorem states that any well-behaved function can be represented by an integral (sum) of sinusoidal signals. where and are weights and phase shifts for each value. We can use the trigonometric identity to express this in a more common form where and .  Since any general (well-behaved) function of time can be represented as a sum of sinusoidal signals, we can use the superposition theorem to find the response of a linear circuit to a general time signal. If we examine the behavior of a linear circuit in response to a single sinusoidal signal with frequency , we can then use superposition to add up (integrate) responses for many sinusoidal signals (each with its own ), weighting the results in the sum using the same weighting factors that appear above.  Thus, it is sufficient to examine the response of linear circuits to a single sinusoidal signal. INCLUDE FURTHER DISCUSSION OF SINE\/COSINE SERIES  "
},
{
  "id": "sec-ac-amplitudes",
  "level": "1",
  "url": "sec-ac-amplitudes.html",
  "type": "Section",
  "number": "3.2",
  "title": "Characterizing Signal Size",
  "body": " Characterizing Signal Size   With AC signals, there are multiple ways to represent amplitude. Here, we will examine methods of characterizing voltage amplitudes, but all methods discussed apply equally well to any other sinusoidally-varying quantity.   Peak voltage corresponds to the traditional definition of amplitude for a sinusoidal waveform where .    Peak-to-Peak voltage .    Root-mean-square (RMS) amplitude is calculated by examining a single cycle of data containing measurements where  are the discrete values of time for which measurements were recorded. Then, which is for sinusoidal waves.    The average power dissipated in a resistor due to a sinusoidal signal is .    Power in a signal (with amplitude ) relative to the power in some other signal (with amplitude ) can be represented using a logarithmic scale called decibels, where .      "
},
{
  "id": "sec-ac-complexsigs",
  "level": "1",
  "url": "sec-ac-complexsigs.html",
  "type": "Section",
  "number": "3.3",
  "title": "Complex Signals",
  "body": " Complex Signals   Signal analysis with sinusoidal functions can be challenging due to the need for trigonometric identities. The mathematical manipulations in circuit analysis can more easily be done if signals are instead represented as complex exponentials.  Using Euler's formula we can see that is the real part of . Using this notation, it is easy to see that the phase information can be absorbed into the amplitude, resulting in a complex amplitude: . With this notation, the measured signal is the real part of the complex signal . So, we can use in equations describing circuit behavior, and the real part of the result represents what we would measure for the parameter of interest.   "
},
{
  "id": "sec-ac-complexZ",
  "level": "1",
  "url": "sec-ac-complexZ.html",
  "type": "Section",
  "number": "3.4",
  "title": "Complex Impedance",
  "body": " Complex Impedance  When analyzing AC circuits with complex signals , we will need to expand beyond the concept of resistance. We define impedance  as where is our normal resistance and is reactance . The impedance is the factor that relates to as seen in . Generally, is frequency-dependent.      Let's look at a few examples. Ohm's law continues to hold for AC signals, so it is trivial to demonstrate that .  Now, let's work to determine the impedance for a capacitor. In introductory physics, you likely learned that capacitance is a quantity that links the voltage difference between two objects and the charge on each object through the expression . Pairing this expression with the definition of current we find that . For a voltage , we thus see that the resulting current through the capacitor is . Using these expressions, we find that so that . Note that the impedance is frequency-dependent and complex. Examining this expression in limiting cases, and .  Now, let's work to determine the impedance for an inductor. Inductors, fundamentally, are coils and act in a way as an anti-capacitor. The fundamental equation governing inductor behavior is which means that the voltage drops across an inductor when . If we assume a current then so that . Simplifying, this leaves us with . Note that the impedance is frequency-dependent and complex. Examining this expression in limiting cases, and .  The results above can be used with a generalized Ohm's law and also with equations for series and parallel impedances   "
},
{
  "id": "sec-ac-complexZ-2",
  "level": "2",
  "url": "sec-ac-complexZ.html#sec-ac-complexZ-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "impedance reactance "
},
{
  "id": "ac-impedance",
  "level": "2",
  "url": "sec-ac-complexZ.html#ac-impedance",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec-ac-capcharging",
  "level": "1",
  "url": "sec-ac-capcharging.html",
  "type": "Section",
  "number": "3.5",
  "title": "Capacitor Charging and Discharging Behaviors",
  "body": " Capacitor Charging and Discharging Behaviors  Let's start examining circuits containing resistors, capacitors, and inductors. We'll start with the circuit in . We want to evaluate the voltage across the capacitor (and resistor) as a function of time if the switch starts closed and opens suddenly at time . Assume that the internal battery resistance is much smaller than the circuit resistor so that and the voltage difference across the capacitor at .   A circuit for examining a discharging capacitor.     We can use KVL to examine the circuit. Since the switch is opened at , we only have a single KVL equation where is the voltage difference between the capacitor plates. For a capacitor, , so . Taking the time derivative of the above equation will allow us to eliminate dependence in favor of , so let's revisit the relationship between and . Since the current causes positive charges to leave the positively-charged capacitor plate and return to the negatively-charged plate, the current will cause a reduction in as time advances, meaning . With this information, we find that or, after rearranging: . By inspection, the solution to this differential equation is where . Now, this current can be plugged back into our original equation to find where at the instant that the switch opens and we've defined something called the RC time constant  which is a characteristic response time associated with this RC circuit. We plot this discharging behavior in .   Discharging capacitor.    Similarly, we can examine the behavior of a charging capacitor by examing the behavior of the circuit in . Here, we do not worry about the battery's internal resistance as typically, meaning that the charging behavior will be determined by .   A circuit for examining a charging capacitor.    Applying the loop law, we find that where is the voltage difference across the capacitor. Remembering that we find that or . Since is a constant, we can write this as . If we define , then this becomes . This has an exponential solution of the form . The initial condition requires that . Thus, our result can be rearranged into . This shows that the capacitor charges from 0% to 63% in .   Charging capacitor.    When charging a capacitor, energy is being stored in the electric field . Likewise, inductors can store energy. As the current through an inductor increases, energy is stored i nthe magnetic field .  "
},
{
  "id": "fig-ac-capdischarge",
  "level": "2",
  "url": "sec-ac-capcharging.html#fig-ac-capdischarge",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " A circuit for examining a discharging capacitor.   "
},
{
  "id": "sec-ac-capcharging-4",
  "level": "2",
  "url": "sec-ac-capcharging.html#sec-ac-capcharging-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "RC time constant "
},
{
  "id": "ac-capdischargeplot",
  "level": "2",
  "url": "sec-ac-capcharging.html#ac-capdischargeplot",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " Discharging capacitor.   "
},
{
  "id": "ac-capcharge",
  "level": "2",
  "url": "sec-ac-capcharging.html#ac-capcharge",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " A circuit for examining a charging capacitor.   "
},
{
  "id": "ac-capchargeplot",
  "level": "2",
  "url": "sec-ac-capcharging.html#ac-capchargeplot",
  "type": "Figure",
  "number": "3.5.4",
  "title": "",
  "body": " Charging capacitor.   "
},
{
  "id": "sec-ac-highpass",
  "level": "1",
  "url": "sec-ac-highpass.html",
  "type": "Section",
  "number": "3.6",
  "title": "RC High-pass filter",
  "body": " RC High-pass filter  Let's look at some circuit behavior for sinusoidal signals. shows the circuit that we will examine.   High-pass RC Filter Circuit.    There is nothing in the formulation of Kirchhoff's laws that would limit them to only DC circuits. In fact, they apply equally well to all circuits (DC, AC, non-linear). Assume that all quantities with a tilde over them are complex quantities expressed as exponentials. So, where the real signal . Using Kirchhoff's Voltage Law, we find that so that . We can then find using Ohm's Law . Expanding our voltage signals, so that . Then, . Expanding the complex amplitude, where . We can calculate the voltage gain : so where and . We can also determine the phase difference between the output and input voltages. Since , we can rearrange to find . Now, so that . Using Eqs. and , we can show the following behaviors:    , meaning leads .     as .     as .   Based on these behaviors, the circuit in is called a RC high-pass filter . Thus, if a voltage input signal contains many sinusoidal signal components with a variety of frequencies, then this filter circuit can eliminate the low-frequency components while leaving the high-frequency components unaffected.  "
},
{
  "id": "ac-highpass-circuit",
  "level": "2",
  "url": "sec-ac-highpass.html#ac-highpass-circuit",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " High-pass RC Filter Circuit.   "
},
{
  "id": "sec-ac-highpass-4",
  "level": "2",
  "url": "sec-ac-highpass.html#sec-ac-highpass-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "RC high-pass filter "
},
{
  "id": "sec-ac-phasors",
  "level": "1",
  "url": "sec-ac-phasors.html",
  "type": "Section",
  "number": "3.7",
  "title": "Phasors",
  "body": " Phasors  In this section, we will introduce phasors , a graphical method of representing complex electronics signals. Take a complex signal, e.g. . For time , we can represent this graphically as a vector at an angle as shown in . This phasor will rotate about a circle with radius as time advances, pointing at an angle at some later time as shown in .   Phasor example.        relative to .      If we have two signals that we would like to compare we can see in that both vectors rotate at the same rate, leaving the phase between them unchanged as time advances.   Two phasors with the same advancing in time.    Time     Some later time       Phasors can help us quickly use graphs to determine the amplitudes and phases of signals relative to some other reference signal. As an example, let's examine the circuit in .  Phasor analysis for a capacitor.    Circuit     Phasor diagram.      The phasor diagram in was generated by completing the following steps:   Draw your phasor diagram for the instant when one of your signals (voltage or current) is purely real, meaning its phasor is aligned along the real axis. Choose this signal based on how easily it can be related to other phasors. In this case, we'll look at an instant when is purely real.    Use Ohm's law to find expressions for voltage changes across components. In this case, we used .    Plot changes across all components. In this example, is purely real which means that is aligned with the negative imaginary axis.   Thus, we find that the phase of the current through a capacitor leads the phase of the capacitor voltage by and the amplitude of the voltage is .  We can proceed with a similar analysis for an inductor. Examining the circuit in .  Phasor analysis for an inductor.    Circuit     Phasor diagram.      and generating the phasor diagram in , we find that the phase of the current through an inductor trails the phase of the inductor voltage by and the amplitude of the voltage is .  THINGS TO CHECK: WHICH EQUATIONS SHOULD HAVE TILDE VARIABLES AND WHICH SHOULD NOT.   Phasor analysis of the RC High-pass filter    High-pass RC Filter.    Let's revisit the RC high-pass filter circuit in and analyze the circuit behavior using phasors. Find the voltage gain and the phase .             To construct the phasor diagram in , we draw along the real axis. Then, is also purely real. We can use Ohm's law to draw along the negative imaginary axis. Then, since Kirchhoff's Voltage Law requires , we use vector addition to draw .  Based on our phasor diagram, we can already conclude the following:    leads .    At high frequencies, and because .    At low frequencies, and because .     We can use the phasor diagram to derive more precise relationships. Using the Pythagorean theorem, we find that . Also, . Combining these results, we find that where as before. Likewise, we can find the phase between our signals using . These results are identical to what we had calculated previously using Kirchhoff's laws.     Phasor analysis of a resonant RLC circuit    Resonant RLC circuit.    Find and for the resonant RLC circuit shown in .    The voltage gain is . The phase is and the resonant frequency is      Phasor diagram.    Based on our phasor diagram, we can already conclude the following:   At high frequencies, and because and .    At low frequencies, and because and .    There exists a frequency where . At this frequency, and . We call the resonant frequency for this circuit.   We can be more quantitative with results gleaned from the phasor diagram. First, our resonance frequency can be determined by setting , giving us which can be rearranged into . We can also find expressions for voltage gain and phase using trigonometry. Since the loop law gives , we can use Pythagorean's theorem to find  . Solving this equation for in terms of and inserting into gives . The phase is found using . These results are plotted in , demonstrating the same qualitative behaviors that we had deduced at the outset.   Resonant RLC circuit curves.    Gain curve.     Phase curve.         Phasor analysis of a parallel RLC circuit    Parallel RLC circuit.    Examine . Determine the current being drawn from the voltage source and the frequency at which the source current's magnitude is minimized.         Phasor diagram.    In order to create the phasor diagram, we draw it at a time at which one convenient current phasor is aligned purely along the real axis. We will choose a time at which is purely real so that is also purely real. We can then use Ohm's law to determine currents across the inductor and capacitor and draw them on the phasor diagram because the voltage across each of the three components is .  Now, the junction law can be used to find : . Using Pythagorean's theorem, so that and . In the limits and , since the inductor or capacitor short out in these limits, respectively. There are intermediate frequencies at which is finite. We can find the frequency at which source current is minimized by solving for when . Current is also minimized when . So, we'll examine . Now, it is impossible for the second term in parentheses to equal zero. So, source current is minimized when or .    "
},
{
  "id": "sec-ac-phasors-2",
  "level": "2",
  "url": "sec-ac-phasors.html#sec-ac-phasors-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phasors "
},
{
  "id": "ac-phasors-plot",
  "level": "2",
  "url": "sec-ac-phasors.html#ac-phasors-plot",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": " Phasor example.        relative to .     "
},
{
  "id": "ac-phasor-compare",
  "level": "2",
  "url": "sec-ac-phasors.html#ac-phasor-compare",
  "type": "Figure",
  "number": "3.7.2",
  "title": "",
  "body": " Two phasors with the same advancing in time.    Time     Some later time      "
},
{
  "id": "ac-capacitor-phasor",
  "level": "2",
  "url": "sec-ac-phasors.html#ac-capacitor-phasor",
  "type": "Figure",
  "number": "3.7.3",
  "title": "",
  "body": " Phasor analysis for a capacitor.    Circuit     Phasor diagram.      "
},
{
  "id": "ac-inductor-phasor",
  "level": "2",
  "url": "sec-ac-phasors.html#ac-inductor-phasor",
  "type": "Figure",
  "number": "3.7.4",
  "title": "",
  "body": " Phasor analysis for an inductor.    Circuit     Phasor diagram.      "
},
{
  "id": "sec-ac-phasors-9",
  "level": "2",
  "url": "sec-ac-phasors.html#sec-ac-phasors-9",
  "type": "Example",
  "number": "3.7.5",
  "title": "Phasor analysis of the RC High-pass filter.",
  "body": " Phasor analysis of the RC High-pass filter    High-pass RC Filter.    Let's revisit the RC high-pass filter circuit in and analyze the circuit behavior using phasors. Find the voltage gain and the phase .             To construct the phasor diagram in , we draw along the real axis. Then, is also purely real. We can use Ohm's law to draw along the negative imaginary axis. Then, since Kirchhoff's Voltage Law requires , we use vector addition to draw .  Based on our phasor diagram, we can already conclude the following:    leads .    At high frequencies, and because .    At low frequencies, and because .     We can use the phasor diagram to derive more precise relationships. Using the Pythagorean theorem, we find that . Also, . Combining these results, we find that where as before. Likewise, we can find the phase between our signals using . These results are identical to what we had calculated previously using Kirchhoff's laws.   "
},
{
  "id": "sec-ac-phasor-example-rlc-resonant-circuit",
  "level": "2",
  "url": "sec-ac-phasors.html#sec-ac-phasor-example-rlc-resonant-circuit",
  "type": "Example",
  "number": "3.7.8",
  "title": "Phasor analysis of a resonant RLC circuit.",
  "body": " Phasor analysis of a resonant RLC circuit    Resonant RLC circuit.    Find and for the resonant RLC circuit shown in .    The voltage gain is . The phase is and the resonant frequency is      Phasor diagram.    Based on our phasor diagram, we can already conclude the following:   At high frequencies, and because and .    At low frequencies, and because and .    There exists a frequency where . At this frequency, and . We call the resonant frequency for this circuit.   We can be more quantitative with results gleaned from the phasor diagram. First, our resonance frequency can be determined by setting , giving us which can be rearranged into . We can also find expressions for voltage gain and phase using trigonometry. Since the loop law gives , we can use Pythagorean's theorem to find  . Solving this equation for in terms of and inserting into gives . The phase is found using . These results are plotted in , demonstrating the same qualitative behaviors that we had deduced at the outset.   Resonant RLC circuit curves.    Gain curve.     Phase curve.       "
},
{
  "id": "sec-ac-phasors-11",
  "level": "2",
  "url": "sec-ac-phasors.html#sec-ac-phasors-11",
  "type": "Example",
  "number": "3.7.12",
  "title": "Phasor analysis of a parallel RLC circuit.",
  "body": " Phasor analysis of a parallel RLC circuit    Parallel RLC circuit.    Examine . Determine the current being drawn from the voltage source and the frequency at which the source current's magnitude is minimized.         Phasor diagram.    In order to create the phasor diagram, we draw it at a time at which one convenient current phasor is aligned purely along the real axis. We will choose a time at which is purely real so that is also purely real. We can then use Ohm's law to determine currents across the inductor and capacitor and draw them on the phasor diagram because the voltage across each of the three components is .  Now, the junction law can be used to find : . Using Pythagorean's theorem, so that and . In the limits and , since the inductor or capacitor short out in these limits, respectively. There are intermediate frequencies at which is finite. We can find the frequency at which source current is minimized by solving for when . Current is also minimized when . So, we'll examine . Now, it is impossible for the second term in parentheses to equal zero. So, source current is minimized when or .   "
},
{
  "id": "sec-ac-python",
  "level": "1",
  "url": "sec-ac-python.html",
  "type": "Section",
  "number": "3.8",
  "title": "Using Python in AC circuits",
  "body": " Using Python in AC circuits  Just as with DC circuits, we can let Python do most of the mathematical manipulation for us when determining circuit behavior. As an example, we'll examine the behavior of voltage gain and phase for the circuit in .   Bandgap RLC Circuit.    Using Kirchhoff's laws and the branch method, we find the following equations . Rearranging these equations into facilitates efforts to recast this system of equations as a matrix equation which can be solved using Python: Here, we have made use of the abs function in NumPy to find the voltage gain by measuring the magnitude of , and we have used the angle function from Numpy to find the phase of at an instant in time when is purely real.  Examining the results of our analysis, we see that this circuit has and at both high and low frequencies. There is a frequency at [PROVIDE EQUATION] at which and . This circuit is called an RLC bandgap filter as it allows signals at most frequencies through unchanged, but has a band (defined by values of L and C) where frequency components are cut out. This can be especially useful if there is a source of noise with a single well-defined frequency contaminating a signal.    "
},
{
  "id": "ac-python-bandgap-circuit",
  "level": "2",
  "url": "sec-ac-python.html#ac-python-bandgap-circuit",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": " Bandgap RLC Circuit.   "
},
{
  "id": "sec-ac-thevenin",
  "level": "1",
  "url": "sec-ac-thevenin.html",
  "type": "Section",
  "number": "3.9",
  "title": "Input and Output Impedance",
  "body": " Input and Output Impedance  Let's revisit Thevenin's theorem and Norton's theorem. Both of these theorems remain valid when working with AC signals as long as we substitute impedances for resistances. Here, we'll focus our attention on the usefulness of Thevenin's theorem.  Thevenin's theorem states that the output voltage and current characteristics of a complicated circuit are identical to output characteristics of a simplified Thevenin-equivalent circuit ( ) for proper choice of Thevenin voltage and impedance.     Here, we provide an example demonstrating the importance of Thevenin's theorem.  An LRC circuit connected to a function generator.     The complicated internal circuitry of a function generator will be equivalent to a single internal voltage source and a single internal impedance . This internal impedance can be found on specification sheets for modern function generators, often labeled as output impedance . Most commonly, function generators have an output impedance of , though some (like those built into prototyping boards) may have output impedances up to several hundred ohms.  The input impedance characterizes a circuit's output voltage and current characteristics based on the load that is applied across the output. A circuit's input impedance characterizes how hard the circuit is to drive and is equivalent to the load circuit's .  Let's use the example in to illustrate the meanings associated with the descriptions above. In this case, the load circuit is an inductor, a capacitor, and a resistor in series, so that . Now, if the load circuit is connected across the output of the function generator, we end up with a voltage-divider circuit as seen in . This means we can use that chapter's result while replacing resistances with impedances, so . We find that is minimized when which occurs when . We draw the following conclusions:   For signal frequencies far from the resonant frequency , meaning that .    When , we will find that and are very different if    We demonstrate this behavior by plotting the signal being produced at the output of the function generator as a function of frequency For the parameters specified in .      Now, this has important consequences. First, extra care must be taken if one were to be studying voltage gain and phase properties of the pictured load circuit. If one were to trust the signal amplitude displayed on the function generator for when calculating voltage gain values, these values would be grossly incorrect for frequencies near the resonance frequency because both and vary with frequency.  These concepts also impact the design of oscilloscopes. If we want to use an oscilloscope to measure the voltage output of a function generator, we want the oscilloscope to have a very high impedance so that the oscilloscope leaves the function generator output voltage unchanged across all frequencies.  So, input and output impedances for circuits is an important consideration when determining how a load circuit will impact the behavior of the driving circuit. We determine Thevenin equivalent circuit values for both the driving and load circuits in order to determine the input and output impedances of these circuits. Input and output impedances are also critical to consider when working at high frequencies (MHz and above). At these high frequencies, impedance matching (or matching input and output impedances of linked circuits) is needed to miminize signal reflections and maximize power transfer. This text will limit it's treatment to sub-MHz frequencies and will not treat these effects.  "
},
{
  "id": "ac-thevenin-eq",
  "level": "2",
  "url": "sec-ac-thevenin.html#ac-thevenin-eq",
  "type": "Figure",
  "number": "3.9.1",
  "title": "",
  "body": "  "
},
{
  "id": "ac-voltagesource-thevenin",
  "level": "2",
  "url": "sec-ac-thevenin.html#ac-voltagesource-thevenin",
  "type": "Figure",
  "number": "3.9.2",
  "title": "",
  "body": " An LRC circuit connected to a function generator.   "
},
{
  "id": "sec-ac-thevenin-6",
  "level": "2",
  "url": "sec-ac-thevenin.html#sec-ac-thevenin-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "output impedance "
},
{
  "id": "sec-ac-thevenin-7",
  "level": "2",
  "url": "sec-ac-thevenin.html#sec-ac-thevenin-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "load input impedance "
},
{
  "id": "sec-diode-semiconductors",
  "level": "1",
  "url": "sec-diode-semiconductors.html",
  "type": "Section",
  "number": "4.1",
  "title": "Semiconductors",
  "body": " Semiconductors  As the name suggets, semiconductors have conductivity between ocnductors and insulators. Semiondur properties have made many important electrical advances possible.   diodes    transistors    operational amplifiers    integrated circuit chips    Light-emitting diodes (LEDs)    photodiodes.     In order to understand semiconductors, we must examine the atomic structure of these materials and how they relate to molecular bonds. Let's start with which shows the energy levels for two isolated atoms.      Quantum mechanics tells us that electrons can occupy discrete energy levels of an atom. Energy levels fill starting with the lowest and fill upward. Electrons occupying high energy levels are further from the nucleus and also have a larger spatial extent surrounding the nucleus compared to electrons in low energy levels, at least on average. Elecrons of course do not behave like macroscopic objects with definite position, but instead are represented by electron clouds. For the purposes of this class, we will not have to trouble ourselves with this level of detail.  In the atom pictured in , the energy levels represented by solid lines are occupied by electrons, with the term valence electrons used to identify electrons in the highest occupied energy level. The dashed lines represent empty energy levels.  When these two formerly isolated items are brought close to each other such that the valence electron orbitals start overlapping, the pair of atoms can reach a lower energy state by sharing some of their valence electrons. These shared energy levels develop into bands rather than precise discrete levels. Fuller details about the physics of covalent bonds can be found in many Modern Physics or Quantum Mechanics textbooks but will be unnecessary for us. provides a rough picture of the elements important to us.     In this figure, the valence band represents the last occupied energy band at Kelvin. The conduction band is the next energy band above the valence band, and the band gap is the energy difference between the top of the valence band and the bottom of the conduction band.  Now, these last three terms are critical to understanding the difference between conductors, semiconductors, and insulators, as illustrated in .     We see that conductors have overlapping valence and conduction bands. This means that the valence electrons, which are most loosely held by the nucleus due to their distance from the nucleus, can move relatively easily from one atom to the other using the empty orbital positions in the conduction band. In insulators, it is difficult to move valence electrons between atoms since those electrons would need to gain a large amount of energy to jump across the large bandgap from the valence to conduction band.  Semicondcuctors have non-overlapping valence and conduction bands, but with only a small bandgap between them. This means that at K, the semiconductor behaves like an insulator. But, at higher temperatures, there is enough thermal energy present that a small population of electrons that had been occupying the valence band instead make the jump into the conduction band and can now move freely.  One common semiconductor material is silicon Si which has an electron configuration that can be represented by . This means that Silicon has a full ground state (two electrons in the 1s orbital), a full second energy level (two electrons in the 2s orbital and six electrons in the 2p orbital), and a third energy level with electrons occupying half of the eight available orbital spots (two spots in the 3s orbital and six spots in the 3p orbital). shows a silicon crystal.  Silicon crystal. The shared electrons in covalent bonds fill the valence shell of the silicon crystal.   In this crystal, each Si atom is surrounded by eight electrons in the valence band, completely filling it. Each bond is formed by two electrons being shared between a pair of atoms, with each atom contributing one of the two shared electrons.  Now, on its own, silicon is a rather poor semiconductor. That said, the semiconductor properties of a Silicon crystal is improved significantly through doping. The term doping represents the process of mixing a small amount of an impurity into the silicon crystal.  There are two types of doping that are imporant to us here, and they are represented in .  Doped semiconductors.    n-type semiconductor.     p-type semiconductor.     In a doped n-type semiconductor , a small amount of phosphorus is added as an impurity into the silicon crystal. Phosphorus has five valence electrons in contrast to the four valence electrons that silicon has. This means that there are nine electrons trying to occupy the eight available spots in the valence band as shown in . Consequently, each ninth phosphorus electron is bumped up into the shared conducting band and can move freely. This is called an n-type semiconductor because negatively-charged electrons are the charge carrier , meaning they are the moving charged particles that comprise any current flowing through the semiconductor.  In a doped p-type semiconductor , a small amount of Boron is added as an impurity into the silicon crystal. Phosphorus has three valence electrons in contrast to the four valence electrons that silicon has. This means that there are seven electrons trying to occupy the eight available spots in the valence band, leaving an open orbital spot in the valence bqand as shown in . Consequently, the holes formed from the missing electron exist in the valence band and represent open spaces into which electrons can move. The reason this is called a p-type semiconductor is pictured in        In this figure, a valence electron feels a force due to the applied voltages and moves to fill the hole (step 1), resulting in a new hole at the electron's former position. This process repeats (step 2) with a different electron moving into the hole location, again swapping places. This continues through steps 3 and 4. The reality of the situation has four electrons each moving one space. it is convenient, instead, to treat the hole (the absence of an electron) as a single positive (relative to an electron) charge that moves four spaces to the left due to the applied voltage, just as a positive charge would move. As such, this hole (which we are treating akin to a positive charge) is considered the charge carrier and can move somewhat freely through the valence band of the semiconductor crystal.  "
},
{
  "id": "fig-diode-isolated-atoms",
  "level": "2",
  "url": "sec-diode-semiconductors.html#fig-diode-isolated-atoms",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": "     "
},
{
  "id": "sec-diode-semiconductors-4",
  "level": "2",
  "url": "sec-diode-semiconductors.html#sec-diode-semiconductors-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "valence electrons "
},
{
  "id": "sec-diode-semiconductors-5",
  "level": "2",
  "url": "sec-diode-semiconductors.html#sec-diode-semiconductors-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "valence band conduction band band gap "
},
{
  "id": "fig-diode-bandgap",
  "level": "2",
  "url": "sec-diode-semiconductors.html#fig-diode-bandgap",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": "    "
},
{
  "id": "fig-diode-si-crystal",
  "level": "2",
  "url": "sec-diode-semiconductors.html#fig-diode-si-crystal",
  "type": "Figure",
  "number": "4.1.4",
  "title": "",
  "body": " Silicon crystal. The shared electrons in covalent bonds fill the valence shell of the silicon crystal.   "
},
{
  "id": "sec-diode-semiconductors-9",
  "level": "2",
  "url": "sec-diode-semiconductors.html#sec-diode-semiconductors-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "doping "
},
{
  "id": "sec-diode-semiconductors-10",
  "level": "2",
  "url": "sec-diode-semiconductors.html#sec-diode-semiconductors-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "doped n-type semiconductor charge carrier "
},
{
  "id": "sec-diode-semiconductors-11",
  "level": "2",
  "url": "sec-diode-semiconductors.html#sec-diode-semiconductors-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "doped p-type semiconductor "
},
{
  "id": "sec-diode-behavior",
  "level": "1",
  "url": "sec-diode-behavior.html",
  "type": "Section",
  "number": "4.2",
  "title": "Diode behavior",
  "body": " Diode behavior  When we put p-type and n-type semiconductors together as in , we get a diode . When a voltage difference is applied across the diode, interesting behaviors can be observed.     Forward-biased.        Reverse biased.        When the voltage is applied across the diode as in , we say the diode is forward-biased . Valence-band holes in the valence band of the p-type semiconductor and conduction-band electrons in the n-type semiconductor move toward the pn junction. At the junction, electrons in the n-type semiconductor fall across the pn junction into p-type semiconductor holes. Since the valence band is a lower energy level than the conduction band, this is accomplished easily. Electrons are also pulled out of the p-type into the wire, generating more valence-band holes. These electrons travel through the circuit and replenish the conduction-band electrons when they enter the n-type semiconductor. This process can proceed indefinitely, resulting in sustained current flow through the diode.  If the bias is reversed as in , we say the diode is reverse-biased . In this case, valence-band holes and conduction-band electrons move away from the pn junction in their respective semiconductors. While electrons can leave the n-type semiconductor, travel through the circuit, and fill the holes in the p-type semiconductor, this will quickly come to a halt because no new holes are formed at the p-n boundary.  Using the behaviors observed above, we find that diodes act similar to one-directional wires. The behavior is captured in .       In this figure, is the voltage drop across the diode. When , the diode is off meaning no current flows through the diode and it acts as a circuit break. When , the diode is on meaning the diode starts acting like a wire, albiet with a voltage drop in the direction of current. In this cartoon picture, the voltage drop across the diode will remain as long as the diode is on regardless of the size of the current through the diode. Likewise, a diode that is off will allow no current regardless of the voltage change applied across the diode. Thus, a diode acts a bit like a unidirectional wire, allowing current to flow in one direction but not the other.  In the above discussion, we see that a diode turns on when the applied voltage drop across the diode reaches a value of , which we call the forward turn-on voltage . More colloquially, it is often referred to as the diode voltage drop . The origin of this diode voltage drop will be developed below.  Both p-type and n-type semiconductors are neutral when the voltage applied across them is zero, meaning each semiconductor individually has no excess of positive or negative charges. Let's now examine the situation in where we have a forward-biased diode.       The p-n junction is used for the boundary between the semiconductors. The bias voltage creates an applied electric field in the diode, accelerating charge carriers toward the p-n junction. Conduction-band electrons in the n-type semiconductor fall across the p-n junction into valence-band holes. It takes some finite time for the charge carriers to redistribute in each semiconductor, resulting in the formation of a thin depletion layer (indicated by dashed lines). Inside the boundary of this depletion layer, there is a deficit of electrons in the n-type semiconductor and a surplus of electrons in the p-type semiconductor, resulting in a second electric field within the depletion layer. If the depletion layer is characterized by thickness , then this results in a voltage difference . In order for charge carriers to redistribute and maintain a current, we must have . This means that the applied voltage bias must be at least as large as some in order to generate an applied electric field that is larger than and can sustain the requisite charge carrier motions to maintain a current through the diode. [CLEAN THIS LAST PART UP. How are related? Be careful with definitions and be precise.]  The size of the diode voltage drop depends on the materials used in diode construction. In diodes constructed using silicon-based semiconductors, V. If germanium-based semiconductors are used to construct the diode, V. For the purposes of this text, we will assume that diodes are silicon-based with V.  We can also be a bit more precise and realistic in our description of diode behavior. Instead of the behavior described in , we can instead relate the current through the diode in the forward direction to the voltage applied across the diode : where and are the voltages on the p-type and n-type semiconductor sides respectively, is the saturation current, is Boltzmann's constant, and is temperature. The value of is dependent on the materials used to construct the diode. For silicon, . The diode behavior is graphically represented in .   More realistic diode behavior.     The saturation current is the current that can bleed through the diode even when reverse-biased. This current is typically very small and can be found in the specifications for a real diode. For the purposes of this text, I will often assume that A. I will also typically assume room temperature K.  Also discuss failure modes of diodes. Breakdown. Curve with fires.  "
},
{
  "id": "sec-diode-behavior-2",
  "level": "2",
  "url": "sec-diode-behavior.html#sec-diode-behavior-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diode forward-biased "
},
{
  "id": "sec-diode-behavior-3",
  "level": "2",
  "url": "sec-diode-behavior.html#sec-diode-behavior-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reverse-biased "
},
{
  "id": "fig-diode-cartoon",
  "level": "2",
  "url": "sec-diode-behavior.html#fig-diode-cartoon",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "      "
},
{
  "id": "sec-diode-behavior-5",
  "level": "2",
  "url": "sec-diode-behavior.html#sec-diode-behavior-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forward turn-on voltage diode voltage drop "
},
{
  "id": "sec-diode-behavior-6",
  "level": "2",
  "url": "sec-diode-behavior.html#sec-diode-behavior-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "p-n junction "
},
{
  "id": "fig-real-diode",
  "level": "2",
  "url": "sec-diode-behavior.html#fig-real-diode",
  "type": "Figure",
  "number": "4.2.4",
  "title": "",
  "body": " More realistic diode behavior.     "
},
{
  "id": "sec-diode-types",
  "level": "1",
  "url": "sec-diode-types.html",
  "type": "Section",
  "number": "4.3",
  "title": "Diode Types",
  "body": " Diode Types  Diodes come in many different types, each built to accomplish some task. [include circuit symbol for standard diodes. below, include symbols for special diodes.]  For instance, Zener diodes are designed to allow operation both when forward biased and reverse biased. [FIGURE TO COME].  Light-emitting diodes (LEDs) are the basis of many light bulbs and other light indicators. LEDs are designed so that when the diode is forward biased, electrons and holes are pushed toward each other at the p-n junction. When an electron falls across the p-n junction from the conduction band to the lower-energy valence band (a process called recombination), the electron releases energy in the form of light. The color and intensity of this light depends on the materials used to construct the diode. LEDs are very energy-efficient, especially compared to incandescent light bulbs.  Photodiodes are a bit like LEDs operating in reverse. When light hits a photodiode surface, energy is depositied into atoms. This energy kicks an electron from the valence band in the p-type semiconductor into the conduction band of the n-type semiconductor. Electrons are accelerated away from the depletion layer by , driving current from the n-type to p-type semiconductor, which is the opposite direction of current in standard diodes. Photodiodes are at the heart of solar panel technology as well as many light sensors.  "
},
{
  "id": "sec-diode-types-3",
  "level": "2",
  "url": "sec-diode-types.html#sec-diode-types-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Zener diodes "
},
{
  "id": "sec-diode-circuit-analytic",
  "level": "1",
  "url": "sec-diode-circuit-analytic.html",
  "type": "Section",
  "number": "4.4",
  "title": "Analysis of diode circuits",
  "body": " Analysis of diode circuits   Analytic circuit treatment  How do we analyze circuits containing diodes? The simplest way is to use the cartoonish behavior demonstrated in . Given this diode behavior, one can occasionally determine by inspection the conditions under which the diode is on or off.For example, let's analyze the circuit in .      In this circuit, which is plotted in .        With experience, the approach above may eventually be enough for you to solve some relatively simple diode circuits. When one is first learning to analyze diode circuits, or when analyzing more complicated circuits, the above method may not work. In such a case, one continues to use the cartoon diode behavior and guesses at whether each diode is off or on for a given instantaneous value of the input voltage. The remaining circuit elements are then analyzed under the assumption that the initial guesses are correct. In order to determine the veracity of the initial guesses, one looks for inconsistencies or impossibilities that arise from the rest of the circuit analysis. If an impossible situation occurs, then one knows that the initial assumptions were incorrect. In this scenario, one adjusts the initial guesses and re-analyzes the circuit, repeating until no inconsistencies occur. Stated differently, the steps to follow are:   Check the conditions in the circuit and see if it is possible to achieve a forward voltage drop across the diode. If it is completely impossible, then the diode will be off and you can treat it as a circuit break. If it is possible that the diode may be forward biased, then continue on to the next steps.    For each diode in your circuit, guess whether the diode is on or off. For each diode that is on, let the voltage drop be locked. For each diode that is off, treat the diode as a circuit break meaning no current can pass through it.    Analyze the rest of the circuit elements and search for inconsistencies.    If any results of your analysis conflict with your guesses about diodes that are on\/off, then go back and change your guesses until there are no inconsistencies.   Let's use this procedure for . If we assume that the diode is on when V, then V. But, this would require a current directed counterclockwise around the circuit which is not allowed by the diode. This inconsistency indicates that our assumption about the diode being on is incorrect in this case. If we change our assumption and instead state that the diode is off when V, then V since no current passes through the output resistor.   Diode example #2    Diode example #2.    Find the voltage in assuming V.       Let's examine this case-by-case.   Case 1: Both diodes are off. Then, so that as well. So, V. This is inconsistent with our assumption, since this results in a bias that is both large enough and in the correct direction to turn on diode . Thus, the assumptions in this case cannot be true.    Case 2: Both diodes are on. Then, V. Using Ohm's law, mA. Also, we'd see that due to the diode drop from point A to point B. Given this information, Ohm's law can again be applied to tell us that mA. The KCL is then used to determine that mA. There is no inconsistency here, meaning that we were correct in our assumptions and . Though it is unnecessary (there can be only one correct answer!), we will examine the remaining cases.    Case 3: Diode 2 is off while diode 3 is on. In this case, our circuit acts as a voltage divider, with V across the two resistors. So, which is more than enough to turn on diode two. Thus, this case cannot be valid.    Case 4: Diode 2 is on while diode 3 is off. In this case, V. This is identical to in case 2 meaning that diode 3 should activate. This conflicts with our assumption that diode 3 is off. Thus, this case cannot be valid.        Diode example #3    Diode example #3.    Find the voltage in assuming V. Note that this is identical to the previous problem except that the two resistors have been swapped.       Let's examine this case-by-case.   Case 1: Both diodes are off. Then, so that as well. So, V. This is inconsistent with our assumption, since this results in a bias that is both large enough and in the correct direction to turn on diode . Thus, the assumptions in this case cannot be true.    Case 2: Both diodes are on. Then, V. Using Ohm's law, mA. Also, we'd see that due to the diode drop from point A to point B. Given this information, Ohm's law can again be applied to tell us that mA. The KCL is then used to determine that mA. This is impossible since we've assumed ideal diodes which do not allow current to pass in the reverse direction.    Case 3: Diode 2 is off while diode 3 is on. In this case, our circuit acts as a voltage divider, with V across the two resistors. So, and which would not turn on . Thus, everything is consistent and this must be the valid scenario.    Case 4: Diode 2 is on while diode 3 is off. In this case, V. This is identical to in case 2 meaning that diode 3 should activate. This conflicts with our assumption that diode 3 is off. Thus, this case cannot be valid.         Python circuit treatment  Let's revisit the circuit in . This time, we will use an improved mathematical representation of diode behavior from , reproduced here as . Assuming we're using a silicon-based diode, we can assume A, , room temperature is K, and . The KVL can be used to write . This is a nonlinear equation that cannot easily be solved analytically for , so we'll use computational methods to estimate . Specifically, we'll use Newton's Method which is described in . In order to use this method, we'll let and then calculate the first derivative . Using these equations, we implement Newton's Method ( ) using the following code:        Diode Example #4   Examine the circuit in . Plot the time behavior of , , , , , and the voltage across the diode .           We can write down an equation for KCL . Using Ohm's law, where is the voltage at the top side of (at the junction between , , and ). Combining these equations, we find . We also get an additional equation by examining the circuit branch containing the diode: . Plugging into the previous equation, we thus find that . If we now group all of the terms, we find . We can then use Newton's method to solve for the currents letting       "
},
{
  "id": "fig-diode-simple-example",
  "level": "2",
  "url": "sec-diode-circuit-analytic.html#fig-diode-simple-example",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": "     "
},
{
  "id": "fig-diode-simple-example-plot",
  "level": "2",
  "url": "sec-diode-circuit-analytic.html#fig-diode-simple-example-plot",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": "     "
},
{
  "id": "sub-diode-analytic-analysis-4",
  "level": "2",
  "url": "sec-diode-circuit-analytic.html#sub-diode-analytic-analysis-4",
  "type": "Example",
  "number": "4.4.3",
  "title": "Diode example #2.",
  "body": " Diode example #2    Diode example #2.    Find the voltage in assuming V.       Let's examine this case-by-case.   Case 1: Both diodes are off. Then, so that as well. So, V. This is inconsistent with our assumption, since this results in a bias that is both large enough and in the correct direction to turn on diode . Thus, the assumptions in this case cannot be true.    Case 2: Both diodes are on. Then, V. Using Ohm's law, mA. Also, we'd see that due to the diode drop from point A to point B. Given this information, Ohm's law can again be applied to tell us that mA. The KCL is then used to determine that mA. There is no inconsistency here, meaning that we were correct in our assumptions and . Though it is unnecessary (there can be only one correct answer!), we will examine the remaining cases.    Case 3: Diode 2 is off while diode 3 is on. In this case, our circuit acts as a voltage divider, with V across the two resistors. So, which is more than enough to turn on diode two. Thus, this case cannot be valid.    Case 4: Diode 2 is on while diode 3 is off. In this case, V. This is identical to in case 2 meaning that diode 3 should activate. This conflicts with our assumption that diode 3 is off. Thus, this case cannot be valid.      "
},
{
  "id": "sub-diode-analytic-analysis-5",
  "level": "2",
  "url": "sec-diode-circuit-analytic.html#sub-diode-analytic-analysis-5",
  "type": "Example",
  "number": "4.4.5",
  "title": "Diode example #3.",
  "body": " Diode example #3    Diode example #3.    Find the voltage in assuming V. Note that this is identical to the previous problem except that the two resistors have been swapped.       Let's examine this case-by-case.   Case 1: Both diodes are off. Then, so that as well. So, V. This is inconsistent with our assumption, since this results in a bias that is both large enough and in the correct direction to turn on diode . Thus, the assumptions in this case cannot be true.    Case 2: Both diodes are on. Then, V. Using Ohm's law, mA. Also, we'd see that due to the diode drop from point A to point B. Given this information, Ohm's law can again be applied to tell us that mA. The KCL is then used to determine that mA. This is impossible since we've assumed ideal diodes which do not allow current to pass in the reverse direction.    Case 3: Diode 2 is off while diode 3 is on. In this case, our circuit acts as a voltage divider, with V across the two resistors. So, and which would not turn on . Thus, everything is consistent and this must be the valid scenario.    Case 4: Diode 2 is on while diode 3 is off. In this case, V. This is identical to in case 2 meaning that diode 3 should activate. This conflicts with our assumption that diode 3 is off. Thus, this case cannot be valid.      "
},
{
  "id": "sub-diode-python-analysis-3",
  "level": "2",
  "url": "sec-diode-circuit-analytic.html#sub-diode-python-analysis-3",
  "type": "Example",
  "number": "4.4.7",
  "title": "Diode Example #4.",
  "body": " Diode Example #4   Examine the circuit in . Plot the time behavior of , , , , , and the voltage across the diode .           We can write down an equation for KCL . Using Ohm's law, where is the voltage at the top side of (at the junction between , , and ). Combining these equations, we find . We also get an additional equation by examining the circuit branch containing the diode: . Plugging into the previous equation, we thus find that . If we now group all of the terms, we find . We can then use Newton's method to solve for the currents letting     "
},
{
  "id": "sec-diode-rectifier",
  "level": "1",
  "url": "sec-diode-rectifier.html",
  "type": "Section",
  "number": "4.5",
  "title": "Full-Wave Rectifier",
  "body": " Full-Wave Rectifier  Let's look at a full-wave rectifier circuit pictured in .    Let's examine this circuit analytically through several cases.   Times when :  In this case, . This means that diode will conduct current while . Since , diode will remain off meaning that current will flow across the resistor , dropping voltage in the process. Then, since , we confirm that diode remains off. Consequently, diode will conduct current . Since there was a voltage drop across and , we find that , confirming our assertion that is off. This current path is represented in         In a similar way, we find that shows the current path when .         Solution Using Newton's method in Python   We find KCL equations for the junctions labeled and  . We can also write down expressions for the currents by examining voltage changes across components . Combining - with - , we find that . Using Newton's method in , we'll set where . Given , we then calculate . Then, Newton's method can be used in Python to estimate the circuit behavior governed by to solve for and find our new root estimate , iterating to some desired tolerance.      "
},
{
  "id": "fig-diode-full-wave-rectifier",
  "level": "2",
  "url": "sec-diode-rectifier.html#fig-diode-full-wave-rectifier",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": "   "
},
{
  "id": "fig-diode-full-rectifier-pos-color",
  "level": "2",
  "url": "sec-diode-rectifier.html#fig-diode-full-rectifier-pos-color",
  "type": "Figure",
  "number": "4.5.2",
  "title": "",
  "body": "   "
},
{
  "id": "fig-diode-full-wave-rectifier-neg-color",
  "level": "2",
  "url": "sec-diode-rectifier.html#fig-diode-full-wave-rectifier-neg-color",
  "type": "Figure",
  "number": "4.5.3",
  "title": "",
  "body": "   "
},
{
  "id": "sec-diode-rectifier-2-4",
  "level": "2",
  "url": "sec-diode-rectifier.html#sec-diode-rectifier-2-4",
  "type": "Example",
  "number": "4.5.4",
  "title": "Solution Using Newton’s method in Python.",
  "body": " Solution Using Newton's method in Python   We find KCL equations for the junctions labeled and  . We can also write down expressions for the currents by examining voltage changes across components . Combining - with - , we find that . Using Newton's method in , we'll set where . Given , we then calculate . Then, Newton's method can be used in Python to estimate the circuit behavior governed by to solve for and find our new root estimate , iterating to some desired tolerance.    "
},
{
  "id": "sec-diode-usefulcircuits",
  "level": "1",
  "url": "sec-diode-usefulcircuits.html",
  "type": "Section",
  "number": "4.6",
  "title": "Useful Diode Circuits",
  "body": " Useful Diode Circuits  Let's take our full-wave rectifier circuit and add a capacitor across the output as in .      "
},
{
  "id": "fig-diode-ac2dc-circuit",
  "level": "2",
  "url": "sec-diode-usefulcircuits.html#fig-diode-ac2dc-circuit",
  "type": "Figure",
  "number": "4.6.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec-transistor-introduction",
  "level": "1",
  "url": "sec-transistor-introduction.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction to transistors",
  "body": " Introduction to transistors  There are two types of BJTs, the npn transistor and the pnp transistor, pictured in .               "
},
{
  "id": "fig-transistor-BJT-types",
  "level": "2",
  "url": "sec-transistor-introduction.html#fig-transistor-BJT-types",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": "            "
},
{
  "id": "sec-transistor-behavior",
  "level": "1",
  "url": "sec-transistor-behavior.html",
  "type": "Section",
  "number": "5.2",
  "title": "Transistor behavior",
  "body": " Transistor behavior  "
},
{
  "id": "sec-transistor-switching",
  "level": "1",
  "url": "sec-transistor-switching.html",
  "type": "Section",
  "number": "5.3",
  "title": "Transistor switching",
  "body": " Transistor switching  "
},
{
  "id": "sec-opamp-ideal",
  "level": "1",
  "url": "sec-opamp-ideal.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Ideal OpAmp",
  "body": " The Ideal OpAmp  The schematic symbol for an ideal op-amp is provided in , where and are called the inverting input and non-inverting input respectively. The amplifier output is given as . Op-amps require an external voltage source for operation, just as transistors require and as supply voltages. These two supply voltages are marked as and , though these connections are sometimes left out in circuit diagrams.  Schematic symbol for an ideal op-amp. The inverting and non-inverting inputs are specified as and . The two voltages and are supplied by an external power source.         shows a top-view pin diagram for two general-purpose op-amps. The half-moon shape allows one to identify pin 1, with remaining pins being counted in a counter-clockwise manner.  Sample top-view pin diagrams for two general-purpose op-amp chips, the LM741 and the LM358. This particular pin diagram is specific to the general purpose LM741 op-amp chip. Other op-amp chips may have different pin diagrams.    LM741        LM358          "
},
{
  "id": "sec-opamp-ideal-2",
  "level": "2",
  "url": "sec-opamp-ideal.html#sec-opamp-ideal-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverting input non-inverting input "
},
{
  "id": "fig-opamp-pin-diagrams",
  "level": "2",
  "url": "sec-opamp-ideal.html#fig-opamp-pin-diagrams",
  "type": "Figure",
  "number": "6.1.2",
  "title": "",
  "body": " Sample top-view pin diagrams for two general-purpose op-amp chips, the LM741 and the LM358. This particular pin diagram is specific to the general purpose LM741 op-amp chip. Other op-amp chips may have different pin diagrams.    LM741        LM358        "
},
{
  "id": "ch-digital",
  "level": "1",
  "url": "ch-digital.html",
  "type": "Chapter",
  "number": "7",
  "title": "Digital Electronics",
  "body": " Digital Electronics  "
},
{
  "id": "ch-advancedcircuits",
  "level": "1",
  "url": "ch-advancedcircuits.html",
  "type": "Chapter",
  "number": "8",
  "title": "Advanced Circuits",
  "body": " Advanced Circuits  "
},
{
  "id": "ch-safety",
  "level": "1",
  "url": "ch-safety.html",
  "type": "Chapter",
  "number": "9",
  "title": "Lab Safety",
  "body": " Lab Safety   The laboratory is a place to gain hands-on experience with course content, become proficient with standard lab tools, and to learn techniques in experimental design, analysis, and troubleshooting. It requires only a small amount of effort to protect you, your classmates, and the equipment from damage or injury. In this lab, the main hazards to protect against include electrical shock, fire, and burns.    General Precautions    Keep your work area organized and uncluttered.    Avoid tripping hazards by keeping cables off of the floor.    Turn off all power when making physical changes to circuit components.    Even after turning power off, use a wire to connect the two ends of each capacitor and inductor in your circuit before reaching into the circuit with your fingers. Capacitors and inductors can store energy, maintaining a voltage difference between their terminals even after the power to the circuit has been turned off.    Be wary of circuit components that have become hot. Check the temperature of components before solidly grabbing them.    If you smell smoke or something burning, turn off your circuit immediately . Only start troubleshooting once the circuit is off.    Practice reaching into your circuit with a single hand (rather than both simultaneously) to reduce the risk of current passing through the core of your body.    Never work with electronics if your hands, clothes, or equipment are wet.    Food and drink are allowed only in designated areas in the lab room. Ask your instructor where this designated area is. Food and drink are prohibited everywhere else in the lab room.    In case of emergency involving risk of life or an uncontrollable fire, call 911. Notify the instructor of any accident that involves injury or equipment damage.     The primary sources of electric power that you will encounter in the lab are the 120V AC wall\/table outlets and the DC power supplies (that may provide up to 30V DC) between their terminals. Higher voltages may be present inside lab equipment. Never stick any unauthorized objects\/fingers into outlets or inside equipment.  When working with electricity, the main danger to avoid is a situation where current passes through your body. While voltage can also be dangerous, it is only very high voltages (which should not be present in the lab) that could cause arcs and burns that are dangerous on their own. In the circumstances you'll encounter in the lab, voltage is only dangerous in that it can induce a current to pass through your body.  The danger posed by currents passing through your body depend on 1) the size of the current and 2) the path that the current follows through your body. The highest risk is associated with a current that passes through the core of your body (namely, your heart). This is why you should learn to use only one hand when reaching into a circuit to insert\/remove circuit components.  The danger posed by current passing through the heart changes based on the size of the current. Breathing can start becoming labored for currents as low as 20mA. By 75mA, breathing may cease until the current is removed. In the 100mA-200mA range, ventricular fibrillation of the heart occurs. This is a condition where the electrical signals that tell your heart to pump are disrupted, resulting in a quivering of the ventricles instead of pumping. This is the most dangerous situation as sudden cardiac death may occur. Above 200mA, a person's chances for survival are actually better. At 200mA or above, the heart actually clamps rather than going into ventricular fibrilation, and beating will often resume if the voltage is removed quickly.  In our lab, you are unlikely to encounter life-threatening situations as long as you do not disassemble lab equipment or stick items into the outlet. The resistance provided by your skin and internal body (hand-to-hand or hand-to-leg) is often as high as as long as your skin is dry. According to Ohm's Law, one would need somewhere on the order of 10kV to result in a 20mA current through the body assuming dry skin . If the skin is wet, however, the combined resistance of your skin and body could drop as low as , meaning that a voltage difference as low as 30V could result in 20mA passing through the body and could lead to difficulty breathing.  To complicate the above picture, the current at which heart fibrillation occurs is lowered for alternating current (AC) as compared to values for direct current (DC). A shock that causes a current of 30mA AC could cause heart fibrillation. Additionally, voltages higher than 400V can cause dielectric breakdown of the skin (which is the main contributor to the body's resistance), meaning the body's resistance could drop as low as a few hundred ohms and lower the voltage threshhold for fibrillation.  In most educational labs at this level of instruction, you're unlikely to face significant dangers to life, though there are still risks of light injury. As long as one keeps hands dry and avoids shocks from the outlet or equipment internals, the risk of injury is quite low. All the same, it is best to always be cognizant of potential danger and to take steps to miminize the risk of discomfort\/injury.  [CITATIONS NEEDED FOR ABOVE INFORMATION]  "
},
{
  "id": "ch-labnotebook",
  "level": "1",
  "url": "ch-labnotebook.html",
  "type": "Chapter",
  "number": "10",
  "title": "Guide to Laboratory Notebooks",
  "body": " Guide to Laboratory Notebooks   In Physics 352, you will learn to keep a formal laboratory notebook. Rather than using a paper lab notebook, we are instead going to keep electronic notebooks. Electronic lab notebooks are seeing increasing use in research labs for several reasons:   It is easier to back-up an electronic document than it is for a physical document.    Data tables and graphs are almost always generated using computers. These objects are more easily incorporated into an electronic notebook (rather than taping physical sheets into a physical notebook).    Electronic lab notebooks can easily be shared amongst multiple people collaborating on the same project.    Lab instructors can grade notebooks without having to collect them from students. This allows students to continue work on other lab notebook entries during the grading process.     Good notebook skills will be essential to you as a practicing scientist, so it is important that you get in the habit of keeping good records early. The lab notebook is a diary of your activities each time you sit down to conduct an experiment. The following information is intended to help you practice good scientific record-keeping skills.    General Formatting and Info     Discuss with your instructor the site to be used for electronic lab notebooks. For example, an instructor may provide a lab notebook template through Google Docs. If using Google Docs, create in Google Drive a folder for your Electronics course. Place your lab notebook Google Doc in this folder.    Enter notes, data, etc. directly into your electronic lab notebook. You should NOT be writing things down on paper for entry at a later time.    Cross out any mistakes with a single line . Do not delete anything once you’ve entered something into your notebook! This includes mistakes in the development of theory, mistakes in procedure, data entry, and analysis. You can learn from your mistakes, even minor ones, if you keep a record of them.    Do not refer to your lab manual in your notebook, except in the case where warnings or hardware specifications in the manual affect your procedure. In real life, you will not have a lab manual, but you will often have technical manuals for the equipment.    You may insert images directly into your lab notebook. You can also directly paste data or code into your notebook, though I'd suggest also inserting a hyperlink to the original files. In order to do this, place the file that you'd like to link to in the same Google Drive folder as your Lab Notebook document. Then, in your Google Doc, choose Insert -> Link. Search for and select the desired file.    I will not be grading explicitly on grammar\/spelling\/etc. That said, your notebook needs to be clear enough that someone else (me in this case) can read your notebook and understand what you are doing or the point you are trying to make with a statement.       Sections of Your Lab Notebook  I would recommend creating a new subfolder for each experiment in the ‘Labs’ folder of your electronic lab notebook. Inside a lab’s subfolder, you can include further subfolders or pages as you see fit. Your notebook entry for each lab should be divided into several sections which are described below. If the lab has multiple sub-experiments, group all sections for a single sub-experiment together and keep it separate from other sub-experiment details.    PREFACE – In this section, provide a brief introductory paragraph (20-40 words or so) describing the theme and goals of the experiment.    THEORY – Provide a circuit sketch (with components labeled with variables rather than specific values) for the circuit type that you intend to study in this lab activity. This will typically accompany either theoretical derivations or a report of theoretical results that you intend to investigate experimentally.    APPARATUS – In this section, you should include details about the equipment and circuits you are working with. This should include:   A list of instruments used, including make and model.    Pin designations (showing the layout of integrated circuit chips, for instance) or other important information regarding parts    A schematic diagram, including   Components labeled with values or part numbers (e.g. 1N914 diode or 2-kΩ resistor)    Clearly-labeled input\/output terminals    Major connections to external power supplies, etc.          PROCEDURE – Use two to three sentences to explain 1) what was measured, 2) what was varied, and 3) how you intend to compare experimental results to theory. Typically, you do not need to include each and every little step along the way of accomplishing this task, but if there is information that you think is critical to remember (odd steps you needed to take), issues that arose, or changes that were made, these details would be included in this section, after your initial procedure summary.  If you obtain unexpected results, try and find out why. Record any debugging you do. Leave wrong results or mistakes in your lab book, crossed out with a single line.  Note: In other lab courses, this section may need to expand with more detail than what I’m asking for above. In electronics, the equipment setup and use is pretty standard from experiment to experiment. As a result, detailed notes regarding circuit construction on the prototyping board (for instance) is not necessary in this course, but similar types of information may be critical to record in other courses.    RAW DATA TABLES – Data should be entered directly into an electronic file if at all possible; do not record data on paper as an intermediate step unless absolutely necessary. This electronic file should be inserted into your electronic notebook before you leave the lab room. Include units.    RESULTS – In this section, you should include tables or graphs that display your experimental results. Your experimental data should be represented using symbols when you are graphing. Axes should be labeled and should include units. If possible, produce a theoretical curve as well for direct comparison to your experimental results. Depending on the lab activity, there may be other methods of reporting your results.    DISCUSSION - Write one paragraph, at least, in conclusion, whether you needed to do any analysis or not. Did you see evidence for the effect you set out to observe? What was the value, with units and uncertainties, of the quantity you set out to measure? If your results did not agree with your expectations, as is sometimes the case, speculate on possible reasons. This should be similar to the Conclusions section of a formal lab report.    APPENDIX - Here, you can include longer spreadsheets of data as well as printouts of the code used for data analysis. When including code, include both a printout but also attach a .py file containing the executable code that you used along with any ancillary files that the code calls (e.g. data files).     "
},
{
  "id": "sec-equipment-protoboard",
  "level": "1",
  "url": "sec-equipment-protoboard.html",
  "type": "Section",
  "number": "11.1",
  "title": "Prototyping Board (or Breadboard)",
  "body": " Prototyping Board (or Breadboard)  Prototyping boards are rows of connectors wired together behind a plastic face. While circuits in your electronics are soldered (often on printed circuitboards), prototyping boards have holes that allow component\/wire leads to be pushed in to form a solderless connection. This makes circuit assembly, disassembly, and modification much easier and faster while developing a circuit. Once a final circuit design has been determined, a more permanent construction may be performed.  The prototyping boards that we'll use look like this:  (for accessibility)  Along the top of this Proto-Board, we have four rows of connectors. The holes in the top row are all connected to +5V, the holes in the second row are connected to +V (variable between +1.3V to +15V), the holes in the third row are connected to –V (variable between -1.3V to -15V), and the holes in the fourth row are connected to the board’s ground. These connections are hard-wired and cannot be changed.  (for accessibility)    The rest of the board is broken up into segments that look like the figure to the right. The connections are set up such that:     The holes that are grouped into a single long vertical column are connected to each other, but with a break halfway down each column. For instance, all holes covered by the purple line are connected internally,as are holes covered by the green line and orange line, though holes covered by different colors are not connected internally. One use for these columns is to distribute voltages from the top voltage strip to other parts of the circuit.    There are also a series of horizontal groupings containing five holes in a row. These five holes (for instance, the holes covered by the blue line) are connected to each other internally. Likewise, the same is true for the holes covered by the brick red line and by the lavender line and gray line. Again, holes covered by different colored lines are not connected internally.    Using these various rows and columns, we are able to make connections between electrical components (such as resistors, capacitors, transistors, semiconductor chips, and wires). While it takes a little practice to get used to this design, you will quickly find that these boards allow great flexibility as you prototype your circuits.      "
},
{
  "id": "sec-equipment-dmm",
  "level": "1",
  "url": "sec-equipment-dmm.html",
  "type": "Section",
  "number": "11.2",
  "title": "Digital Multimeter (DMM)",
  "body": " Digital Multimeter (DMM)  The handheld digital multimeter (or DMM) is commonly used to measure   voltage (DC and AC),    current (DC and AC),    resistance,    continuity, and    other lesser-used quantities such as frequency.      In voltage and current modes, the internal design of the DMM is such that it has negligible effect on the circuit being measured. That said, you should always spare a moment to consider whether the input impedance in each mode is of the appropriate size to minimize the effect on the measured circuit.   (for accessibility)    The use of the DMM varies based on what quantity is being measured. Note that the meter must be connected:   in parallel to measure voltage or resistance, and    in series to measure current.      (for accessibility)   "
},
{
  "id": "sec-equipment-oscilloscope",
  "level": "1",
  "url": "sec-equipment-oscilloscope.html",
  "type": "Section",
  "number": "11.3",
  "title": "Oscilloscopes (BK Precision 2190E or 2542B)",
  "body": " Oscilloscopes (BK Precision 2190E or 2542B)    (for accessibility)    (for accessibility)    The oscilloscope is an extremely versatile instrument. It can be used to measure both steady and time-dependent voltages, frequency, time duration, phase difference, and harmonic distortion. Some oscilloscopes automatically test transistors, perform spectral analysis, integrate, differentiate, sum, subtract, filter, and store electrical signals. Anyone working in an experimental science should be able to use an oscilloscope with considerable confidence.  The oscilloscopes that we are using in lab (BK Precision 2542B or 2190E) are general-purpose, two-channel digital storage instruments capable of displaying and capturing electrical signals with frequencies up to 100 MHz. Its front panel can be divided into a number of sections:   The color LCD display shows the signal on one or more of the two input channels, using a different color for each channel.    A set of buttons along the right hand side of the display are used to make menu item selections.    A set of buttons and knobs on the right half of the instrument control some of the advanced oscilloscope functions, including:   a TRIGGER section that permits one to control the starting point for the displayed waveform,    a VERTICAL section, accepting up to two input signals and containing controls to vary the voltage resolution (among other things),    a HORIZONTAL or ‘time base’ section that controls the time resolution of the display.        In its most commonly used mode of operation, an oscilloscope creates a visual display by capturing and successively overlaying identical windows of time, each window beginning at the same point (relative to the ‘trigger point’) on the signal. The time base of the scope determines how much time is represented by each horizontal division of the LCD display. The triggering function determines when each time window is to begin; proper triggering is necessary for stable, unambiguous display of the desired waveform. Finally, the vertical section of the scope controls the amplitude of the information displayed. It determines for each of the two channels how many volts are represented by each vertical division on the display.   Hints regarding oscilloscope controls    To change the horizontal (time base) scale:   The Time\/div knob changes the time per division (sec\/div are color coded by input channel and displayed on the screen).    Position knob changes location of the trigger (labeled as an arrow along the top of the screen).       To change the vertical (voltage base) scale:   Scale know changes the voltage per division (V\/div are color coded by input channel and displayed on the screen).    Position knob changes location of the ground (labeled as a color-coded arrow on the left of the screen).       To access the parameters for each channel, press Ch. 1 (or 2,3,4) button twice and chose from:   Input coupling (AC\/DC\/Ground)    Invert signal    Probe setup    Bandwidth limit    Probe    Digital Filter    Volts\/scale    Invert       To adjust the trigger:   Trigger knob changes the voltage level of the trigger.    Trigger MENU button   Select which channel to trigger off of (trigger level arrow changes color to show which channel is being triggered)    Slope: can trigger off a rising edge or falling edge    Trigger mode: Auto, Normal, other          To select the ACQUIRE mode:   Run\/Stop: sets the scope to continuously acquire or freeze after the last trigger.    Single sequence: draws the signal only once after a single trigger. Will not trigger on successive events.    Autoset: scope tries to choose overall best scope settings (sometimes useful when you can’t see anything, but generally used as a last resort because it can also mislead you.       Measure menu:   You can select various measurements and which channel to measure. Be very careful with automatic measurements (again these can be deceptive). Generally use cursors to make accurate measurements. Note that the automatic mode searches for the very top and bottom of the signals (when measuring voltages) which may not provide an accurate value for the actual amplitude as noise on the signal may artificially inflate the max\/min values.       Cursor menu:   Choose time (vertical bars) or voltage (horizontal bars) measurement.    Choose which channel to measure (measurement cursors may be the same color as the channel they are measuring).    Choose manual adjustment (adjust each cursor separately) or fixed (adjust both cursors simultaneously).    Choose which cursor to adjust (Cursor A\/Cursor B).    Use the knob in the upper-left corner of the controls to adjust the cursor positions.    The position relative to ground (or trigger zero time for time measurements) is displayed on the screen with the ‘@’ symbol.    The relative distance between the cursors is displayed on the screen with the ‘ ’ symbol.       For further details, please read A Shortish Guide to Using an Oscilloscope , posted to the course webpage.   "
},
{
  "id": "sec-equipment-fngen",
  "level": "1",
  "url": "sec-equipment-fngen.html",
  "type": "Section",
  "number": "11.4",
  "title": "Function Generator",
  "body": " Function Generator   (for accessibility)   "
},
{
  "id": "sec-equipment-components",
  "level": "1",
  "url": "sec-equipment-components.html",
  "type": "Section",
  "number": "11.5",
  "title": "Electronics components",
  "body": " Electronics components   Resistor Color Codes  Resistors are marked with (typically) four colored bands. These bands provide a code that can be used to determine the fvalue of the resistance. The meanings of the colors and band placements are provided in .  [GENERATE OWN FIGURE] Resistor color codes.    Thus, a resistors with a Green-Violet-Orange-Silver code has a resistance of .   Resistor color code practice. put into example.   (for accessibility)     Resistor color code practice. put into example.   (for accessibility)      Potentiometers  Read about potentiometers here for now: Digikey Potentiometer Explanation   Potentiometers (or pots) typically have three terminals: Two are the ends of a fixedc resistor and one is the 'wiper', as pictured in .  Potentiometer   (for accessibility)     [GENERATE OWN IMAGE] a) Physical design, b) what's inside, c) schematic symbol   (for accessibility)   This design allows the potentiometer to be used as a variable resistor, where the resistance varies between the wiper terminal and each of the fixed terminals as the knob is rotated. Before using aany potentiometer, ensure that you are sure of the role tqaken by each of the terminals, as there can be variation in the terminal layouts.    Switches  The SPST (single pull, single throw) switch has two terminals, while the SPDT (single pull, double throw) switch has three terminals as shown in .  Single-pull double-throw (SPDT) switch.   (for accessibility)     [GENERATE OWN FIGURE]   (for accessibility)   The SPST switch is meant to flip between a closed circuit and an open circuit, depending on the switch position. The SPDT is meant to flip between connection A and connection B, depending on the switch position. Always verify the switch operation before incorporating it into your circuit. Many prototyping boards have built-in switches available, as shown in .  [GENERATE OWN IMAGE]   (for accessibility)       Wires, Cables, and Connectors  Banana Plugs ( ) are typically at the ends of an insulated wire containing a single conducting path. The cable color is irrelevant to the behavior of the wires, though some thought should be used when choosing colors to assist with wiring organization. Alligator clips can be attached to banana wires, allowing them to clip to a component.  Cable with banana connectors. There is an alligator clip placed on one of the male banana connectors.   (for accessibility)      Male BNC to male banana adapter.   (for accessibility)     Male BNC to femail banana adapter.   (for accessibility)     BNC tee   (for accessibility)     Adapter that converts female BNC connector to clip leads.   (for accessibility)     "
},
{
  "id": "fig-components-color-codes",
  "level": "2",
  "url": "sec-equipment-components.html#fig-components-color-codes",
  "type": "Figure",
  "number": "11.5.1",
  "title": "",
  "body": " [GENERATE OWN FIGURE] Resistor color codes.    "
},
{
  "id": "img-components-resistor1",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-resistor1",
  "type": "Figure",
  "number": "11.5.2",
  "title": "",
  "body": " Resistor color code practice. put into example.   (for accessibility)   "
},
{
  "id": "img-components-resistor2",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-resistor2",
  "type": "Figure",
  "number": "11.5.3",
  "title": "",
  "body": " Resistor color code practice. put into example.   (for accessibility)   "
},
{
  "id": "img-components-potentiometer-outside",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-potentiometer-outside",
  "type": "Figure",
  "number": "11.5.4",
  "title": "",
  "body": " Potentiometer   (for accessibility)   "
},
{
  "id": "fig-components-potentiometer",
  "level": "2",
  "url": "sec-equipment-components.html#fig-components-potentiometer",
  "type": "Figure",
  "number": "11.5.5",
  "title": "",
  "body": " [GENERATE OWN IMAGE] a) Physical design, b) what's inside, c) schematic symbol   (for accessibility)   "
},
{
  "id": "img-components-spdt",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-spdt",
  "type": "Figure",
  "number": "11.5.6",
  "title": "",
  "body": " Single-pull double-throw (SPDT) switch.   (for accessibility)   "
},
{
  "id": "fig-components-switches",
  "level": "2",
  "url": "sec-equipment-components.html#fig-components-switches",
  "type": "Figure",
  "number": "11.5.7",
  "title": "",
  "body": " [GENERATE OWN FIGURE]   (for accessibility)   "
},
{
  "id": "fig-components-pboard-switches",
  "level": "2",
  "url": "sec-equipment-components.html#fig-components-pboard-switches",
  "type": "Figure",
  "number": "11.5.8",
  "title": "",
  "body": " [GENERATE OWN IMAGE]   (for accessibility)   "
},
{
  "id": "img-components-banana-alligator",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-banana-alligator",
  "type": "Figure",
  "number": "11.5.9",
  "title": "",
  "body": " Cable with banana connectors. There is an alligator clip placed on one of the male banana connectors.   (for accessibility)   "
},
{
  "id": "img-components-bnc-male-to-banana-male",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-bnc-male-to-banana-male",
  "type": "Figure",
  "number": "11.5.10",
  "title": "",
  "body": " Male BNC to male banana adapter.   (for accessibility)   "
},
{
  "id": "img-components-bnc-male-to-banana-female",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-bnc-male-to-banana-female",
  "type": "Figure",
  "number": "11.5.11",
  "title": "",
  "body": " Male BNC to femail banana adapter.   (for accessibility)   "
},
{
  "id": "img-components-bnc-tee",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-bnc-tee",
  "type": "Figure",
  "number": "11.5.12",
  "title": "",
  "body": " BNC tee   (for accessibility)   "
},
{
  "id": "img-components-clip-lead",
  "level": "2",
  "url": "sec-equipment-components.html#img-components-clip-lead",
  "type": "Figure",
  "number": "11.5.13",
  "title": "",
  "body": " Adapter that converts female BNC connector to clip leads.   (for accessibility)   "
},
{
  "id": "ch-labhints",
  "level": "1",
  "url": "ch-labhints.html",
  "type": "Chapter",
  "number": "12",
  "title": "Troubleshooting Hints",
  "body": " Troubleshooting Hints    "
},
{
  "id": "sec-labpython-dataload",
  "level": "1",
  "url": "sec-labpython-dataload.html",
  "type": "Section",
  "number": "13.1",
  "title": "Loading Data Files",
  "body": " Loading Data Files  Here, we are going to import data from a spreadsheet file, bringing it into Python as a NumPy array.  Import from .csv file using NumPy  If you are starting with data in an .xlsx file, you must first convert it into a .csv file using the 'Save As' feature, selecting 'CSV (Comma Delimited)' format. Then, import your data into Python using code like the following:   import numpy as np # Read filename.csv file into a pandas dataframe. Skip the first two lines as they are string headers. data = np.loadtxt('filename.csv', skiprows=2, delimiter=','); R = data[:,0]; V = data[:,1];     Import from .xlsx file using Pandas package   The Pandas package in Python is a powerful data analysis and manipulation tool. If you intend to work with large amounts of data in Python, you may wish to investigate the capabilities of this package. For our purposes now, we'll just scratch the surface of its functionality and solely use it to import data into Python from an xlsx file format (from Excel), eventually converting it into NumPy arrays.  import pandas as pd import numpy as np # Read filename.xlsx file into a pandas dataframe df = pd.read_excel('filename.xlsx'); # Create a pandas sequence using the 0th column of data. Rows 0 and 1 contain header info. df_R = df.iloc[2:,0]; # Create a pandas sequence using the 1st column of data. Rows 0 and 1 contain header info. df_V = df.iloc[2:,1]; # Convert pandas sequences to numpy arrays R = df_R.to_numpy(); V = df_V.to_numpy();     "
},
{
  "id": "sec-labpython-dataload-2-1",
  "level": "2",
  "url": "sec-labpython-dataload.html#sec-labpython-dataload-2-1",
  "type": "Example",
  "number": "13.1.1",
  "title": "Import from .csv file using NumPy.",
  "body": " Import from .csv file using NumPy  If you are starting with data in an .xlsx file, you must first convert it into a .csv file using the 'Save As' feature, selecting 'CSV (Comma Delimited)' format. Then, import your data into Python using code like the following:   import numpy as np # Read filename.csv file into a pandas dataframe. Skip the first two lines as they are string headers. data = np.loadtxt('filename.csv', skiprows=2, delimiter=','); R = data[:,0]; V = data[:,1];   "
},
{
  "id": "sec-labpython-dataload-2-2",
  "level": "2",
  "url": "sec-labpython-dataload.html#sec-labpython-dataload-2-2",
  "type": "Example",
  "number": "13.1.2",
  "title": "Import from .xlsx file using Pandas package.",
  "body": " Import from .xlsx file using Pandas package   The Pandas package in Python is a powerful data analysis and manipulation tool. If you intend to work with large amounts of data in Python, you may wish to investigate the capabilities of this package. For our purposes now, we'll just scratch the surface of its functionality and solely use it to import data into Python from an xlsx file format (from Excel), eventually converting it into NumPy arrays.  import pandas as pd import numpy as np # Read filename.xlsx file into a pandas dataframe df = pd.read_excel('filename.xlsx'); # Create a pandas sequence using the 0th column of data. Rows 0 and 1 contain header info. df_R = df.iloc[2:,0]; # Create a pandas sequence using the 1st column of data. Rows 0 and 1 contain header info. df_V = df.iloc[2:,1]; # Convert pandas sequences to numpy arrays R = df_R.to_numpy(); V = df_V.to_numpy();   "
},
{
  "id": "sec-labpython-plotting",
  "level": "1",
  "url": "sec-labpython-plotting.html",
  "type": "Section",
  "number": "13.2",
  "title": "Producing Line Plots",
  "body": " Producing Line Plots  Once data is accessible in Python, data analysis and visualization can be performed. As an example, let's assume that we've conducted an experiment on the circuit shown in .      Here, is a potentiometer (or variable resistor) that the experimenter controls. In this experiment, , , and we measured as the potentiometer resistance was varied between . The code below produces a plot in which the data are represented as closed circles. A solid line represents the theoretical prediction which can be derived using content from .    "
},
{
  "id": "fig-labpython-vdiv-circuit",
  "level": "2",
  "url": "sec-labpython-plotting.html#fig-labpython-vdiv-circuit",
  "type": "Figure",
  "number": "13.2.1",
  "title": "",
  "body": "     "
},
{
  "id": "sec-labpython-curvefit",
  "level": "1",
  "url": "sec-labpython-curvefit.html",
  "type": "Section",
  "number": "13.3",
  "title": "Fitting a Curve to Data",
  "body": " Fitting a Curve to Data  Frequently, curve fitting will be used to extract results from experimental data. In this section, we demonstrate use of scipy.optimize.curve_fit , the curve fitting function provided within SciPy.  Let's illustrate this process through an example. Assume that we have conducted an experiment in which we investigated the behavior of a voltage divider circuit shown in where and are treated as being unknown. We collect measurements of as we vary and measure . A curve fitting process can then be employed to find and from fit parameters, where is our fitting function. Here, an executable routine is provided that uses the curve_fit function from the scipy.optimize module to perform a curve fit to data, with a code break-down with explanation following. When examining the results provided by this curve fitting routine, note that values of and were used when generating the synthetic data in this example.    Breakdown of curve fitting routine  Let's take a closer look at the pieces that go into this Python routine. We start by initializing our variable and function space.  # Clear all variables from previous code runs globals().clear() # Import functions for use in this program import numpy as np import scipy.optimize as opt import matplotlib.pyplot as plt # Close all open figures plt.close('all')  We ensure that all variables in the variable-space are cleared out and don't carry over from other code boxes in the textbook. We then import functions from NumPy, SciPy, and MatPlotLib.pyplot packages that we'll wish to use. Finally, we close all plot windows that may exist from other instances of running code in this textbook.  The curve_fit function that we intend to use must be given information about the functional form of our fitting equation. This information will be provided by a function func that we define based on Equation . Once defined, func will be an input provided to the curve_fit function.  # Define our fitting function def func(R, Vin, Rfix): out = Vin * R\/(Rfix + R) return out  The first line of our function definition always begins with def , followed by the name of the function we're defining and its arguments. The curve_fit function expects the first argument of func to represent our data's independent variable (often the horizontal axis of a plot). In this example, R will represent . Any additional arguments specified for func represent fitting parameters that will be determined by the curve fitting process. In this example, these fit parameters Vin and Rfix will represent and respectively. The next line(s) contain the actual functional form for our fitting function which will be dictated by Equation in terms of the argument names above. The out variable represents our data's dependent variable (often the vertical axis of a plot) and represents in this example. The final line of the function definition for func will return to curve_fit a value of out based on the argument values that curve_fit provided to func .  The next lines of code represent the introduction of experimental data into the routine. There are only ten data points in this example, so it is not too onerous to enter the data by hand directly into the routine. For larger data sets, it is instead recommended that data import routines similar to those shown in be used.  # Create arrays containing data from experiment Rpot = np.array([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]); Vout = np.array([0.815, 1.332, 1.880, 2.238, 2.614, 2.777, 2.881, 3.289, 2.974, 3.096]);    We are now ready to perform a curve fit to our data. The curve_fit function takes as inputs the name of the fitting function, the variable name for the independent variable, and the variable name for the dependent variable. Further inputs and options are available but optional, and can be found in official documentation for SciPy.  # Perform curve fitting fit, fit_cov = opt.curve_fit(func, Rpot, Vout);  Here, we provide the name of our defined function func , the name of our independent variable data Rpot , and the name of our dependent variable data Vout . The curve_fit function will then return its estimate for values of the fit parameters as an array of values in fit and something called the covariance as an array of values in fit_cov . A full description of the meaning of the covariance matrix can be found in data analysis or statistics texts. For our purposes, the covariance can be used to provide estimates of the one standard deviation uncertainty (arising from scatter in the data) for each of the fit parameters stored in fit .  # Calculate standard deviation on fit parameters (associated with data scatter) sigma=np.sqrt(np.diag(fit_cov));    Estimates for the fit parameters and data-scatter uncertainties are printed for the user.  # Print values and uncertainties for fit parameters print('Vin={0:.2f}V +\/- {1:.2f}V and Rfixed={2:.2f}ohms +\/- {3:.2f}ohms'.format(fit[0],sigma[0],fit[1], sigma[1]))  In this print command, the structure of the string that will be displayed is provided first, followed by values taken from variables present in our program. As an example, the portion of the command reading Rfixed={2:.2f}ohms indicates that the spot enclosed by the curly brackets should be replaced by the second element (since the number before the colon is a 2 ) in the format attribute ( fit[1] in this case). The :.2f indicates that the number placed in this spot should be a floating point number (because of the f ) that is truncated two digits after the decimal point (because of the :.2 ). To better demonstrate this functionality, an alternative set of print commands, shown here, could have been used to split the statement of results into two lines of text.  # Print values and uncertainties for fit parameters print('Vin={0:.2f}V +\/- {1:.2f}V '.format(fit[0],sigma[0])) print('Rfixed={0:.2f}ohms +\/- {1:.2f}ohms'.format(fit[1], sigma[1]))    To produce a theory curve based on these fit parameters, we first generate an array of values for associated with our theoretical prediction, and then evaluate a theoretical prediction for for each of these values.  # Create arrays containing values for the best fit curve Rpot_fit=np.linspace(0,10000, 100); Vout_fit=fit[0]*Rpot_fit\/(fit[1]+Rpot_fit);  Here, Rpot_fit is an array containing 100 values spaced linearly in the range (0,10000). These values are plugged into Equation to generate an array of values for Vout_fit .  The remainder of the code contains plotting commands along the lines of those discussed in .  # Plot experiment data and best fit curve on the same axes plt.plot(Rpot, Vout, 'o', label='Data'); plt.plot(Rpot_fit, Vout_fit, label='Fit') plt.xlim(0,10500); plt.ylim(0,3.5); plt.xlabel(r'Resistance ($\\Omega$)') plt.ylabel(r'$V_\\text{out}$') plt.legend(); plt.show();     "
},
{
  "id": "sec-labpython-montecarlo",
  "level": "1",
  "url": "sec-labpython-montecarlo.html",
  "type": "Section",
  "number": "13.4",
  "title": "Propagating Uncertainties Through Curve Fits",
  "body": " Propagating Uncertainties Through Curve Fits  When conducting experiments, any data collected will have some uncertainty associated with it. These uncertainties will naturally give rise to uncertainties in any subsequent curve fitting results. Here, we will explain the Monte Carlo technique for estimating uncertainties for fit parameters.  The Monte Carlo technique uses repeated curve fits on synthetic data to generate a distribution of values for each fit parameter. Fit parameter uncertainties can be found from these distributions. The synthetic data that is used in these repeated curve fits are generated using the original data with their associated uncertainties.  We will use [THIS SECTION REMAINS IN DEVELOPMENT]  "
},
{
  "id": "sec-labactivities-voltagedivider",
  "level": "1",
  "url": "sec-labactivities-voltagedivider.html",
  "type": "Section",
  "number": "14.1",
  "title": "Lab: Voltage Divider",
  "body": " Lab: Voltage Divider   Objective: Through the course of this lab, you will familiarize yourself with the operation of a prototyping board and its various components (breadboard, voltage sources, potentiometers, and switches) and with resistor color codes. You will build a DC voltage divider circuit using this prototyping board and will use a handheld digital multimeter (DMM) to measure properties of circuit behavior.   Equipment: Prototyping board, digital multimeter (DMM) with banana cables and alligator clips, 1k resistor, wires.   THEORY  Using content from class, derive an expression for the ratio for the voltage divider circuit in .          INTRODUCTION TO EQUIPMENT  For the following steps, explain in your lab notebook the behavior of the various components that you test.    With the prototyping board turned off, use the DMM in resistance mode to verify the internal connections of the breadboard. In other words, verify that the resistance between holes is if they are supposed to be connected and 0.L (essentially, out of range) if the holes are not supposed to be connected.    With the prototyping board still turned off, set up the DMM to verify the +5V row (with respect to the board’s ground). Once the DMM is physically connected and set to voltage mode, only then turn the prototyping board on and verify the expected voltage behavior. Specifically, confirm that the 5V row is indeed 5V above the board common.    Turn the prototyping board off, change the DMM connections, and verify the other power strips. ALWAYS TURN OFF THE POWER WHEN CHANGING CONNECTIONS!    Use the DMM to verify the behavior of both on-board potentiometers. Do behaviors deviate from expected behaviors in any way? Describe how the available terminals correspond to parts of the potentiometers’ designs.    Use the DMM to verify the SPDT switch behavior.    You’ve been given five different resistors. Use the color codes to determine their specified resistance values, and then verify these values using your DMM. Provide all of these predictions, results, and corrections in your notebook. Remember, this isn't about getting things right immediately. The lab notebook is a journal of your activities. Record your mistakes, corrections, and notes about what you learned.     Discuss your findings with your professor prior to moving on to the next section.     EXPERIMENT  In this section, you will construct the DC voltage divider pictured below using the prototyping board, one fixed resistor, the on-board potentiometer, and a SPDT switch.          With the prototyping board turned off, construct your circuit, remembering the following:   Make use of the long columns of holes to distribute voltages to convenient locations on your board.    Remember the internal wiring of the prototyping boards. Don’t accidentally ‘short’ your resistor or potentiometer.    Don’t use long wires when short wires will do. Try to keep your circuit organized and use efficient placement of wires. A neat and organized circuit is much easier to troubleshoot!    Verify your circuit and discuss the next steps with your professor before moving on.     You must measure the ratio as a function of the variable resistance . Use the DMM to first measure the actual value (with the prototyping board turned on). Then, with the prototyping board off again, move the DMM connections to measure the variable resistance. Please note the following:   When measuring the resistance of the variable resistor, ensure that the multimeter dial is correctly set and that the SPDT is in the position that creates a break in the circuit.    When measuring , ensure that the multimeter dial is correctly set and that the SPDT is in the position that creates a closed connection in this segment of the circuit.    You will need to repeat the previous two steps, measuring potentiometer resistance and for each of ten potentiometer resistance values. Ensure that your ten potentiometer resistances are chosen to provide adequate coverage of the full potentiometer range.    Record your results in a spreadsheet table and ensure this table is included in your lab notebook.       Use Python to graph the results of your measurements ( vs ). Use symbols (not a line) to represent your data points. On the same axes, generate a theoretical plot based on the predicted behavior of this circuit and represent this theory curve using a solid line plot. Also provide a legend.   Question: Are there any deviations from expected behavior at low or high resistances? If so, discuss this in your lab notebook.    Extension: In your lab notebook, discuss how you can make a voltage divider and conduct this experiment using only a single potentiometer (without the fixed resistor that we used in our circuit). Include a circuit diagram. Also discuss common places in your everyday life where you may find this type of circuit used.    Ensure that all required parts are included in your lab notebook. See for details.     "
},
{
  "id": "fig-labactivities-voltagedivider-circuit",
  "level": "2",
  "url": "sec-labactivities-voltagedivider.html#fig-labactivities-voltagedivider-circuit",
  "type": "Figure",
  "number": "14.1.1",
  "title": "",
  "body": "     "
},
{
  "id": "fig-labactivities-voltagedivider-circuit-expt",
  "level": "2",
  "url": "sec-labactivities-voltagedivider.html#fig-labactivities-voltagedivider-circuit-expt",
  "type": "Figure",
  "number": "14.1.2",
  "title": "",
  "body": "     "
},
{
  "id": "sec-labactivities-oscilloscopeprimer",
  "level": "1",
  "url": "sec-labactivities-oscilloscopeprimer.html",
  "type": "Section",
  "number": "14.2",
  "title": "Lab: Oscilloscope Primer",
  "body": " Lab: Oscilloscope Primer   Objective: Through the course of this lab, you will familiarize yourself with the operation of a the BK Precision 2190E Digital Oscilloscope (or scope). You will use the scope to measure an AC voltage signal from the internal function generator of the scope, and from an external function generator. Our goal will be to understand how to display a signal on the scope, measure frequency and amplitude values, and trigger the scope properly by adjusting the triggering threshold and other trigger settings.   Equipment: Function generator, oscilloscope, oscilloscope probe, BNC coaxial cable.   Lab Notebook: In your theory section of the report, you should discuss any functions of the oscilloscope that we use today and their purpose. In the data section, you should include the signal data and photos asked for throughout the lab. You do not need a procedure, results or conclusion section for this lab. Otherwise, please follow the lab notebook guidelines provided in .   THE OSCILLOSCOPE INTERFACE  The oscilloscope interface seems quite complicated at first, but in order to measure one signal vs. time we will only need a few functions.   Turn on your scope using the power button on the top of the case. Wait for it to start and then hit the Default Setup button- it is blue in the upper right of the front face. You should see the following display:   (for accessibility)     The scope has the ability to display two signals at once. Turn on the channel two display by hitting the 2 button. A pink line, representing the voltage plugged into the channel 2 BNC input connector, should now appear on top of Channel 1's yellow line. (Both voltages are zero at the moment as nothing is plugged into either channel.)    You can use the small knobs below the 1 and 2 buttons to vertically displace the signal lines on the display. Try it and see if you can move channel 1 upwards and channel two downwards as shown below:   (for accessibility)     Turn off channel 2 by hitting the 2 button. Re-center signal 1 on the x-axis. Turn off the channel 2 menu that appeared on the right of the screen by hitting the Menu On\/Off button.   To explore more of the functions of the scope we will need to look at a signal.    MEASURING THE BUILT-IN TEST SIGNAL  The oscilloscope has a built in test signal. It is a 1KHz square wave, and can be measured by connecting an oscilloscope probe to the two metal clips in the lower right of the front face.  (for accessibility)     Find your oscilloscope probe. Plug it into the Channel 1 BNC connector on the oscilloscope. Set the attenuation switch on the probe to 1X. (10X means the voltage measured in attenuated by 10- useful for high voltage projects.)    The probe has two clips. The side alligator clip must be connected to ground. The center hook clip is connected to the point in a circuit where you want to measure the voltage. Find the metal leads for the test signal (shown above in the figure). Connect the oscilloscope probe to the test signal clips, clipping the probe ground to the test signal ground and the probe's center hook to the test signal clip that is marked as a 1 kHz square wave. Channel 1 should display the test signal as shown below:  (for accessibility)      Take a picture of your channel 1 display for your lab notebook.    You should see the oscilloscope's vertical and horizontal scales on the display screen. The CH1 = 1.00V marker means that the vertical grid spacing (between horizontal dotted lines) represents a change of 1.00 V. The M = 500 μs marker means there is a 500 μs spacing between each vertical dotted line. What is the amplitude of this square wave? Include this value in your report.     Try to change the vertical (voltage) scale by using the large CH 1 knob on the front panel. Also try to change the horizontal (time) scale by using the large knob marked 'Horizontal' on the front panel.    Change the horizontal scale to display the wave on a 100 μs timescale and a 2V vertical scale. Take a picture of the output to include in your report.     Return the waveform to its default view. You can do this either by reversing your changes made above or, even easier, by just hitting the Default Setup button again.       MEASURING A SINE WAVE  Now we will use an external function generator to produce an AC sine wave signal for us to measure.   With the function generator turned off, disconnect the oscilloscope probe.    Use a BNC cable to connect the function generator output to the oscilloscope Channel 1 input.    Turn on the function generator. We want a 1V amplitude 1kHz sine wave signal to measure. Press the Amp menu button and type in 1.0 and then press . Then, click Freq and type 1.0 and click the kHz button. At this point, there is still no signal being produced. Press the Output button to start producing the desired signal. The Output button should now be glowing, indicating that the function generator output is active.    The display should show a sine wave, but probably too zoomed in to see the whole wave. Hit the Auto button to autoscale the display to the signal. The following image shows the correctly auto-scaled sine wave. Click the Measure button on the oscilloscope and select parameters that you might want to measure for each channel, including the Peak-to-Peak Amplitude and frequency of the signal. What are the values of these parameters? Record values in your notebook along with an image of the oscilloscope display.   (for accessibility)      To make sure you understand the different settings of the function generator and scope, do the following:   Set the function generator to display a 500Hz signal with a 20V pk-pk amplitude    Display the signal on the scope with a 10V vertical scale and a 1ms timescale.    Take a picture of this output and include with your report.       Note that you can use the position knob to move the signal up and down on the screen. This is purely moving the 0V reference position on the screen. The position of this reference point is indicated by the yellow arrow with a 1 in it.    Also note that you can adjust the vertical Zoom , or scaling for each channel independently. As you adjust the CH1 knob, you can see that the value CH1=___V changes in the bottom left corner. This number indicates the change in voltage vertically across one of the small boxes in the grid displayed on screen for the Channel 1 signal. You can also adjust the horizontal scaling in the same way, with the M___ms number providing the change in time horizontally across one of the small boxes in your grid. You will often need to adjust these appropriately to see your desired signal. Note: You should always try to maximize the vertical size of each signal that you are trying to measure to get the most precise measurements using the built-in measure feature and using the cursors (explained below). If you have a periodic signal, it is often desirable to have 3-5 periods displayed in order to use the built-in measure feature.       USING THE CURSORS  With complicated signals, the auto measured output for amplitude and frequency cannot necessarily be trusted. In these cases, it’s better to do manual measurements with the oscilloscope's cursor functionality.   Set up the function generator to produce a 1kHz, 20V pk-pk sine wave.    Display this signal on the scope, auto-scaled. Hit the Run\/Stop button to freeze the signal for better analysis. The button should light up red when data acquisition is stopped. (Don’t forget it’s stopped and that you’re no longer measuring real time data!)    To manually measure the period of the wave, we will use vertical cursors. Hit the Cursors button on the top center of the scope control panel. In the menu that appears, change the mode to Manual . Then change the type to Time and ensure that the source is CH1 . You should see two dotted lines appear on the display.    You can move the position of the lines by selecting cursor A or B in the screen menu and then turning the small knob in the upper left of the control panel. Try to move cursor A onto a peak of the wave. Do the same for cursor B.   NOTE: If you can only see one cursor line on the screen, it might be that the other is off the edge of the display. Try selecting the invisible cursor and moving the knob until it appears in view. Sometimes you might need to zoom out in time or voltage to find the cursors.     The cursors appear with readouts that tell you the time location for each individual cursor (with respect to the trigger, which will be discussed next), the time interval between the two cursors, and the associated frequency. Do these values make sense? Record these values and take a photo of the screen for your report.     Switch the cursor type to Voltage to get horizontal cursors. Place them so that you can measure the pk-pk voltage amplitude. Record the pk-pk voltage, and take a photo for your report.        Triggering  The oscilloscope needs to know where the wave starts in order to display a nice, steady display output. This process of finding the start of the waveform is called triggering . The trigger determines the location of your signal with respect to the scope’s definition of t=0s. The blue T in the image below indicates the time location of the trigger.  (for accessibility)  Using the trigger menu and cursor wheel, we can set the trigger level at whatever voltage threshold we want. When the experimental signal crosses the trigger level that we set, the oscilloscope calls that time t=0s and all other times are measured with respect to that time. The oscilloscope can be told to trigger off of CH1, CH2, or even other external signals. It can also be told to trigger when the signal rises through the trigger level or falls through the trigger level.  For a simple AC sine wave, triggering is pretty easy to set up with the Auto-scale feature, but for other signals you may need to manually adjust the trigger settings.   Make sure the scope is in RUN mode, not STOP mode.    With the AC sine signal displayed, find the Trig Menu button on the control panel (on the right, under Auto). Hit this button to bring up the trigger settings menu.    In this menu, we say how we want the scope to find the beginning of the signal. By default, Type is set to Edge , Source is set to CH1 , and Slope is set to Up . This means we are telling the scope to search for an edge with a rising slope on channel 1, and place everything such that that edge is at t=0s.    Try to set the slope type to Down . Discuss in your report how the display changes.    We also need to tell the scope how big of a voltage actually counts as a signal. This is especially important if we have a noisy experiment. We don’t want to accidentally trigger on noise instead of our real signal. This function is controlled by the Trigger Level (or just Level ) knob on the control panel (lower right).    Try adjusting the trigger level and you should see the level line appear on the display. Any voltage signal with a peak below this line will not be considered a signal. Try moving the level to above the sine wave peak. Describe what happens in your report.    Adjust the level knob to manually regain good triggering. As a rule of thumb, it is good to have the trigger level around 30% below the peak of your signal.     The location of the trigger’s t=0s can be adjusted left or right on the screen using the Horizontal Position knob. A word of advice: if the trigger time is offset from the middle of the screen and you change the time resolution on the scope, the trigger indicator may be outside of the window of view on the display. This can sometimes cause confusion if you do not realize that you are looking at a portion of the signal well after (or before) the trigger time.   In more advanced contexts one can trigger all oscilloscope channels off of Channel 1, Channel 2, or off of a third external trigger. We will discuss these options later on in the course, as needed.   "
},
{
  "id": "sec-labactivities-oscilloscopeprimer-6-2",
  "level": "2",
  "url": "sec-labactivities-oscilloscopeprimer.html#sec-labactivities-oscilloscopeprimer-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "oscilloscope probe Channel 1 alligator clip hook clip Default Setup "
},
{
  "id": "sec-labactivities-oscilloscopeprimer-7-2",
  "level": "2",
  "url": "sec-labactivities-oscilloscopeprimer.html#sec-labactivities-oscilloscopeprimer-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Freq kHz Output Output Auto position Zoom "
},
{
  "id": "sec-labactivities-oscilloscopeprimer-8-2",
  "level": "2",
  "url": "sec-labactivities-oscilloscopeprimer.html#sec-labactivities-oscilloscopeprimer-8-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Run\/Stop Cursors Manual Time CH1 "
},
{
  "id": "sec-labactivities-oscilloscopeprimer-9-2",
  "level": "2",
  "url": "sec-labactivities-oscilloscopeprimer.html#sec-labactivities-oscilloscopeprimer-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triggering "
},
{
  "id": "sec-labactivities-oscilloscopeprimer-9-3",
  "level": "2",
  "url": "sec-labactivities-oscilloscopeprimer.html#sec-labactivities-oscilloscopeprimer-9-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Trig Menu Edge CH1 Up Down Trigger Level Level "
},
{
  "id": "sec-labactivities-oscilloscopeprimer-9-4",
  "level": "2",
  "url": "sec-labactivities-oscilloscopeprimer.html#sec-labactivities-oscilloscopeprimer-9-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Horizontal Position "
},
{
  "id": "sec-labactivities-rc-highpass",
  "level": "1",
  "url": "sec-labactivities-rc-highpass.html",
  "type": "Section",
  "number": "14.3",
  "title": "Lab: RC High-Pass Filter",
  "body": " Lab: RC High-Pass Filter   Objective: To use the oscilloscope to explore the attenuation, phase-shifting, and transient behavior of an RC high pass filter circuit. This experiment involves resistance, capacitance, filtering, attenuation, half-power frequencies, time constants, phase shifts, and oscilloscope and function generator operation.   Equipment: Proto-board, digital oscilloscope, oscilloscope probes, function generator, resistor, capacitor.   RC HIGH-PASS FILTER THEORY   The aim of this experiment is to test the reliability of the theoretical predictions for a RC high pass filter circuit like the one shown in .  RC high-pass filter circuit. Use and .   The prediction for the ratio of the amplitudes of the output voltage to the input voltage is . The half-power frequency is given by . The theoretical prediction for the phase shift between output and input voltages is .    RC CIRCUIT EXPERIMENTS     Make sure all equipment is turned off before proceeding to construct the high pass filter circuit shown in Fig. 1 on your prototyping board.    Attach a BNC tee to split the function generator output.    Connect one side of the BNC tee to the circuit input using clip connectors, and connect the other side of the tee to the CH1 input of the oscilloscope.    Connect the circuit output to the CH2 input on the scope. Use oscilloscope probes to make connections between the oscilloscope and the circuit. Make sure both probes are set to attenuation.    Turn on the oscilloscope and set it to display CH1 and CH2.     Have your professor check your circuit before turning on the prototyping board and function generator.     Program the function generator to produce a sine wave with a peak-to-peak amplitude of approximately 2.0 volts and a frequency of 100 Hz.    Trigger the oscilloscope on CH1 (AUTO, Rising Slope). Set the trigger level appropriately based on the CH1 amplitude.    Proceed to acquire data that lets you test the theoretical predictions given by the two equations above.  Your data should consist of pairs of voltage values , as well as phase shifts acquired at 24 frequencies (100 Hz, 200 Hz, …, 900 Hz, 1 kHz, 2 kHz, , 9 kHz, 10 kHz, 20 kHz, 50 kHz). Don't forget to record your frequencies.   Tip: You are allowed to use the Measure functionality to measure , and the phase between channels 1 and 2. Given that this functionality can sometimes provide poor results, you should manually check your measurements occasionally using the cursors (for instance, manually check at 100 Hz, 1 kHz, and 10 kHz).   Tip: To measure the phase shift, we recommend zooming in on the zero-crossings and measuring the time delay between the signals on the two channels (using the cursor function on the oscilloscope). From the frequency (or period) and the time delay, you can calculate the phase shift (in radians or degrees).   Tip: When advancing to a new frequency, find the frequency you want and wait for the signal to stabilize before recording values. If conducting a manual measurement of parameters using cursors, you may want to press RUN\/STOP to temporarily freeze the oscilloscope. This allows you to have a stable display while you are writing down your results or using your cursors to find experimental values. When complete, press RUN\/STOP again to unfreeze the oscilloscope.   Q: Explain how you determined the phase shift manually from experimental measurements using cursors. Provide an example of your work in your lab notebook, including a picture of your oscilloscope display.    Experimentally determine the value of (to the nearest Hz) and proceed to record values for at . Include this data point as part of the data set that you recorded earlier.   Hint: What value should have when ?   Q: Explain the process you used to find .   Q: Include in your notebook an image of your oscilloscope display at your best estimate of ?   Q: What is your experimentally-determined value of ?    Plot vs using symbols (not a line). Decide whether to plot your data using linear axes or a semi-log plot (with a logarithmic frequency axis).   Q: How did you decide whether to use linear or semi-log plot axes? Think about the information you are trying to present and which option best highlights the behavior.    Proceed to perform a curve fit to your experimental data (based on the theoretical gain equation) with as a fit parameter. (See for guidance.)   Q: What is the fitted value of .    Overplot a theoretical curve (as a line) using the fitted value of . Make sure that you provide a legend on the plot.    Plot phase shift vs frequency using the same type of axes (linear or semi-log) that you used in step 11. Proceed to perform a curve fit to your experimental data (based on the theoretical phase equation) with as a fit parameter. (See for guidance.) Overplot your curve fit as a line.   Q: What is the fitted value of .     Note on the lab notebook discussion section: Include all of the standard topics in your discussion section, but also make sure to address the following points:   You found in multiple different ways (theory, experiment, curve fit). As part of your discussion, compare your values and discuss possible reasons for any discrepancies.    Examine the visual agreemenet between data and curve fit plots and discuss the validity of our theoretical expressions.      "
},
{
  "id": "fig-labactivities-rc-highpass-theorycircuit",
  "level": "2",
  "url": "sec-labactivities-rc-highpass.html#fig-labactivities-rc-highpass-theorycircuit",
  "type": "Figure",
  "number": "14.3.1",
  "title": "",
  "body": " RC high-pass filter circuit. Use and .   "
},
{
  "id": "sec-labactivities-rlc-resonant",
  "level": "1",
  "url": "sec-labactivities-rlc-resonant.html",
  "type": "Section",
  "number": "14.4",
  "title": "Lab: RLC Resonant Circuit",
  "body": " Lab: RLC Resonant Circuit   Objective: In your lab notebook, write a few sentences stating your objective in conducting this laboratory exrercise. Consider the following questions:   What kind of circuit am I examining?    What is new about this circuit as compared to circuits previously studied?    What theoretical predictions do you have regarding circuit behavior?    What effects do you expect to observe?   Your answers should be specific to the type of circuit you are examining, but do not discuss specific component values.   Equipment: Proto-board, digital oscilloscope, resistor, capacitor, inductor.   RLC RESONANT CIRCUIT THEORY   You will be studying properties of the circuit pictured in .    We developed the theory for this circuit in . In your lab notebook, summarize the main theoretical results\/circuit behaviors that you expect to observe today. To guide you, here are a few questions you may wish to address:   What voltage gain and phase behaviors do you expect to observe as ?    What voltage gain and phase behaviors do you expect to observe as ?    At what frequency do you expect the highest voltage gain? Express your answer as a function of variables and and show your work. What do you expect voltage gain and phase to be at frequency ?   These are just a few examples. Are there any other important qualities that could be tested experimentally?    RLC CIRCUIT EXPERIMENTS   In your lab notebook, describe a procedure that you intend to follow to make measurements of voltage gain and the phase difference between output and input voltages . Here are a few questions you may wish to consider:   How will you confirm the values associated with your circuit components? Note: You will be unable to verify the inductance , but you should be able to measure values for other components.    In this experiment, you will need to measure , , and for many values of frequency increasing from 200~Hz.    What equipment do you intend to use as a voltage source?    What equipment do you intend to use to measure the desired quantities?    If using the oscilloscope, describe the functionality that will be used (e.g. cursors, MEASURE functions, etc.). Why did you make your choice?    Plan to display your results on a plot with a logarithmic frequency axis and a linear Gain and phase axis using the semilogx command instead of the plot command.    At how many frequencies will you take data? How are you going to determine measurement spacing?   When determining your answers to this question, consider that you likely don't need a high density of data points in regions where you expect little variation in and , but you will want a higher density of data points in regions where you expect high variation in these quantities.    To determine frequency ranges associated with high and low variation in gain and phase, it can be helpful to perform a quick informal scan of experimental parameters to find the experimental resonant frequency while not actually recording gain and phase measurements. With this information, you can better determine the distribution of frequencies at which to record data.    Since you will be using a logarithmic horizontal axis, your frequency selections should take this into account.       How will you identify when you are at or near the resonant frequency?    When comparing to theoretical predictions, use the equations that result from the analysis in to generate theoretical curves for and vs frequency, plotting the theoretical curves as a different colored line on the same axes as the experimental data in each case.     Build your circuit on the prototyping board. When laying out your circuit, it can be useful to build it in a way that is clean and similar to the circuit diagram when possible. See for an illustration of how one may do this.  Suggested prototyping board layout created using Fritzing. This deliberate placement of CH1 and CH2 connections means that the oscilloscopes phase measurement for CH1-CH2 will correspond to a measurement of as we desire.      As you proceed to conduct your experiment, discuss any changes you have to make to your procedure and the reason for those changes. Additionally, if you observe some behavior that you were not expecting or that confuses you, make a note of it in your notebook.   Reminder on oscilloscope operation: Before recording any measurement values into your notebook, you must first   center each signal vertically on the oscilloscope display and adjust the vertical scaling on each channel so that the signals are magnified as much as possible on the screen.    adjust the timebase so that there are 3-5 cycles displayed on the oscilloscope screen.   You should ensure these optimal settings are satisfied for each frequency at which you take data.   Tip: Your starting input voltage should be sinusoidal with amplitude and an initial frequency of Hz.  After completing the experiment above, return to the resonance frequency that you observed and do the following:   Make sure you always turn off the circuit power when moving probes or changing components!    Move the oscilloscope Channel 2 probe to the node marked X on the circuit diagram.    Make sure that both channels have the same VOLTS\/DIV settings.    Press the MATH button (in Channel 1 and 2 controls area) and explore the various calculations that can be accomplished using the functions in this menu.    Use options in the MATH menu to subtract the Channel 1 signal from the Channel 2 signal.    Q: What are you measuring when you do this?     Q: What do you observe?     Q: Take a photo displaying the MATH signal as well as your signal and place it in your notebook. What is the peak-to-peak amplitude of the MATH signal? What is its phase relative to ?       Turn off your circuit. Switch the positions of L and C in your circuit (leaving the Channel 2 probe where it is) and repeat the previous bullet points.    Q: What are you measuring now?     Q: What do you observe?     Q: Take a photo displaying the MATH signal as well as your signal and place it in your notebook. What is the peak-to-peak amplitude of the MATH signal? What is its phase relative to ?        Q: Do your observations make sense to you? How do you expect your observed MATH signals to compare to and ?     Once you have completed data collection and analysis, write a discussion section that summarizes your results and compares them to your initial theory.   What options can you think of to compare theory to experiment in this lab?    What option(s) did you choose for your comparison of theory to experiment? Why did you make the choice that you did?    Address any discrepancies that you may have seen along with any issues you may have run into. Speculate regarding solutions\/explanations related to these discrepancies\/issues. This lab has been designed such that there will be discrepancies between observation and our theory.   Part of this is because there may be a discrepancy between the quoted inductance value and the actual inductance of your physical component.    We must also confront the idea that real inductors do not necessarily behave as nicely as the ideal inductors that we discuss in class. The behavior of a real inductor can be better approximated by an inductance in series with an internal resistance , and then that combination in parallel with a parasitic capacitance .      Include this discussion in your lab notebook.   "
},
{
  "id": "fig-labactivities-rlc-circuit",
  "level": "2",
  "url": "sec-labactivities-rlc-resonant.html#fig-labactivities-rlc-circuit",
  "type": "Figure",
  "number": "14.4.1",
  "title": "",
  "body": "   "
},
{
  "id": "img-labactivities-rlc-resonant-layout",
  "level": "2",
  "url": "sec-labactivities-rlc-resonant.html#img-labactivities-rlc-resonant-layout",
  "type": "Figure",
  "number": "14.4.2",
  "title": "",
  "body": " Suggested prototyping board layout created using Fritzing. This deliberate placement of CH1 and CH2 connections means that the oscilloscopes phase measurement for CH1-CH2 will correspond to a measurement of as we desire.    "
},
{
  "id": "sec-labactivities-diode-iv-characteristic",
  "level": "1",
  "url": "sec-labactivities-diode-iv-characteristic.html",
  "type": "Section",
  "number": "14.5",
  "title": "Lab: I-V Characteristic for Diodes",
  "body": " Lab: I-V Characteristic for Diodes   Objective: In your lab notebook, write a few sentences stating your objective in conducting this laboratory exrercise. Consider the following questions:   What kind of circuit(s) or components are you exploring?    What is new about this circuit as compared to circuits previously studied?    What theoretical predictions do you have regarding circuit behavior?    What effects do you expect to observe?   Your answers should be specific to the type of circuit you are examining, but do not discuss specific component values.   Equipment: Proto-board, digital oscilloscope, DMM, 1N4001 silicon diode, 10k resistor.   Introduction   To date we have used only linear circuit elements in lab: resistors, capacitors, and inductors. In this experiment, we take up the diode, a nonlinear device. Diodes provide signal conditioning, voltage regulation, and the conversion of AC voltages and currents into DC. In this experiment, you will measure a silicon diode’s “I-V characteristic” using the circuit pictured in .    Before conducting the experiment, discuss the following topics in your lab notebook:   How does a single diode behave in a circuit?    What should the I-V characteristic look like? Provide a rough sketch.       EXPERIMENT   In this experiment, you need to collect many data points to construct the I-V characteristic for your diode. You can either do this using a DC supply for your input, collecting point-by-point the diode voltage drop and associated diode current as you vary the DC supply. This process is very slow. So, we will instead use a sinusoidal voltage source as and collect time traces for and . We will export this data to a computer and then use Python to generate the I-V characteristic.    Unplug your prototyping board. You will not need to plug it in for this experiment.    Obtain a 1N4001 silicon diode and test its function with the multimeter set to its diode-testing mode. In this mode, the DMM checks the effective resistance of a diode by attempting to force a positive current out through its + or red lead, through the external diode, and back into its - or black lead. When the DMM displays a small result such as 0.5V, one may infer that the red lead is connected to the anode (or p-type semiconductor) and the black lead to the cathode (or n-type semiconductor) of the diode, and that the diode is conducting in its easy direction. If, instead, a large off-scale indication of .OL is displayed, then the diode is reverse-biased. Note how the diode is marked to indicate which end is the anode.    Proceed to construct the circuit shown in .    Attach the oscilloscope probes so that CH1 measures and CH2 measures in .   Q: What will you need to do in Python to extract from your data?   Q: What will you need to do in Python to extract from your data?    Connect your waveform generator to your circuit and set it to produce a 60Hz sinusoidal signal that varies between V.    Save your data to a USB flash drive. The oscilloscope can export data in several formats. For our purposes it is best to save and export the actual digitally sampled data points (as opposed to an image file of the display) so that we can plot, manipulate, and analyze the data using a program like Excel or LoggerPro. This requires that we save the data in channels one and two separately.   Press the RUN\/STOP button to capture the data and to make sure that you are saving the data you want.    Insert your flash drive into the USB port on the front of the oscilloscope.    Press the SAVE\/LOAD button and, from the menu options figure out how to save the CH1 and CH2 data (in separate files) to a spreadsheet format file (such as a .csv file). Make note of the filename for each channel. The instructions depend on the oscilloscope type. Try one of the following:   SAVE\/RECALL TYPE (CSV), press Confirm and follow the rest of the menu options to save a new file.    SAVE\/RECALL EXTERNAL STORAGE NEW NEW FILE SAVE AS CSV SAVE.          Turn off your waveform generator and oscilloscope.    Load your data into a spreadsheet file (which you can upload to your lab notebook as a file; no printout is necessary). Examine how the data is formatted and determine the meaning of each column of data.    Write a program in Python to load your data, extract and from the data you collected, and plot your I-V characteristic. Make sure to label your axes and include units.   P: Include your I-V characteristic in your lab notebook.   Q: Discuss similarities and differences between your measured I-V characteristic and the cartoon behavior displayed in .   Q: Discuss similarities and differences between your measured I-V characteristic and the more realistic behavior shown in .    Add to your Python program above the ability to produce a second plot, this time of , , and vs on the same axes using different colors for each signal. Ensure that your axes are labeled (with units!) and that you include a legend.   P: Include your plot of input, output, and diode voltage signals in your notebook.   Note: This result illustrates the ability of diodes to rectify oscillating voltages, converting symmetric AC signals into signals that, on average, have a DC component. The present circuit is called a half-wave rectifier . In this case, the diode acts to turn off current flow for one half of each input cycle. In the next experiment, you will construct a full-wave rectifier that effectively outputs the absolute value of the input voltage.    Produce a third plot in Python that shows vs . Ensure that the time range shown matches the range in the previous voltage vs time plots.   P: Include your plot of vs in your notebook.    Provide a discussion in your lab notebook based on guidelines provided in    "
},
{
  "id": "fig-labactivities-diodes-iv-circuit",
  "level": "2",
  "url": "sec-labactivities-diode-iv-characteristic.html#fig-labactivities-diodes-iv-circuit",
  "type": "Figure",
  "number": "14.5.1",
  "title": "",
  "body": "   "
},
{
  "id": "sec-labactivities-diode-iv-characteristic-5-4-10-3",
  "level": "2",
  "url": "sec-labactivities-diode-iv-characteristic.html#sec-labactivities-diode-iv-characteristic-5-4-10-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "half-wave rectifier "
},
{
  "id": "sec-labactivities-diode-ac2dc",
  "level": "1",
  "url": "sec-labactivities-diode-ac2dc.html",
  "type": "Section",
  "number": "14.6",
  "title": "Lab: AC to DC Conversion Using Diode Bridge Rectifier",
  "body": " Lab: AC to DC Conversion Using Diode Bridge Rectifier   Objective: In your lab notebook, write a few sentences stating your objective in conducting this laboratory exrercise. Consider the following questions:   What kind of circuit(s) or components are you exploring?    What is new about this circuit as compared to circuits previously studied?    What theoretical predictions do you have regarding circuit behavior?    What effects do you expect to observe?   Your answers should be specific to the type of circuit you are examining, but do not discuss specific component values.   Equipment: Proto-board, digital oscilloscope, DMM, 4 x 1N4001 silicon diodes, 3.3k resistor, five capacitors in the range from 1 F to 500 F.   Introduction   The operation of many electronic devices depend on a DC voltage source, but the electricity delivered to households in the United States is 60-Hz AC voltage. Today, we'll explore one method of converting AC voltage to DC voltage using the bridge full-wave rectifier with a smoothing capacitor as pictured in .    This circuit converts an AC input voltage to a nearly-constant output voltage, though a small ripple will remain. Larger values of smoothing capacitance will reduce the size of this ripple and thus will improve the quality of the DC voltage output. High-capacitance capacitors are typically more expensive and physically larger than small capacitors, so there is incentive to keep the capacitance as small as possible. Thus, devices that require DC voltages often specify a maximum ripple size that they can tolerate.  Your goal in this experiment is to predict the optimal smoothing capacitance one would use to ensure a 5% ripple on . The ripple size depends on the smoothing capacitance (which you will determine), the input signal frequency (which we will assume to be 120-Hz) and the load resistance provided by the device across the output (here, represented by the 3.3-k resistor).  Before conducting the experiment, be sure to review the behavior of the unsmoothed bridge full-wave rectifier circuit in .   NOTE: One downside of the circuit shown in is that neither terminal is connected to ground. This means that we cannot simply connect a single oscilloscope probe across since the ground provided by the oscilloscope and the ground provided by the function generator would conflict. In practice, this issue can be resolved by using a floating function generator where the output is isolated from ground, or to use a transformer between the function generator and rectifier circuit. We will use a simpler solution and use the oscilloscope to measure on CH1, on CH2, and then use the MATH oscilloscope feature to display .    EXPERIMENT   Once you've reviewed the above information, complete the following steps.    Use your DMM to determine exact values for your resistor and your capacitors.   Warning: The capacitors that you are using are called electrolytic capacitors and are polarized, meaning that they only work when the negative lead (often marked with a negative sign) is at a lower voltage than the positive lead. When measuring the capacitance with the DMM, connect the COM to the negative capacitor lead.    Unplug your prototyping board. You will not need to plug it in for this experiment.    Construct the circuit shown in on your prototyping board. Use the smallest capacitor value that you've been given as your smoothing capacitor. The input voltage will be provided by your function generator.   Warning: Pay attention to the capacitor polarity in the circuit schematic. If you wire the capacitor in backward, you can destroy the capacitor (sometimes resulting in a puff of smoke or small flame). Remember that in this circuit, always.     Set up the oscilloscope to measure on CH1 by connecting the oscilloscope probe to the proper location in the circuit that you constructed. Turn your oscilloscope on.    Turn on the function generator (but leave the OUTPUT off). Set the generator to produce a 120-Hz sinusoidal voltage with a peak amplitude of 5-V. Then, enable the OUTPUT.    Use the CURSOR functionality to measure the amplitude of .   Q: Record your amplitude in your lab notebook.   P: Insert a photograph of into your lab notebook.    Disable the function generator OUTPUT.    Set up the oscilloscope and probes in the following way.   Warning: Failure to follow these instructions may result in equipment damage and\/or electric shock.      Use an oscilloscope probe (x1) to connect CH1 across and ground.    Use an oscilloscope probe (x1) to connect CH2 across and ground.       Enable the function generator OUTPUT.    Use the oscilloscope's MATH functionality to display on the oscilloscope screen. Under the MATH menu, do the following:   Set Operation to .    Set Source A to CH1.    Set Source B to CH2.    Ensure that Invert is set to Off.    Explore Page 2\/2 of the MATH menu. Determine how to shift the displayed MATH signal up and down on the oscilloscope screen and how to adjust the vertical scale for the MATH signal.       Use the oscilloscope cursors to measure the size of the ripple on .   Q: Record the ripple size and smoothing capacitance in your lab notebook.    Disable the function generator OUTPUT.    Swap out the smoothing capacitor for the next largest capacitance that you've been given.    Enable the function generator OUTPUT and measure the size of the ripple and record this value in your lab notebook.    Follow the procedure to measure the size of the ripple for all capacitor values you've been given, recording the values in your notebook. WARNING: You must disable the output of the function generator before making any changes to the circuit in order to avoid shocks.     Use Python to do the following:   Perform a curve fit to your data. Assume a function of the form where and are fitting parameters and is your capacitance variable.    Plot ripple voltage size vs smoothing capacitance and use symbols to display your data points. Overplot a line representing your curve fit.      P: Include your plot in your lab notebook.   Q: Provide your fit parameters in your lab notebook.    Predict the minimum smoothing capacitance one would require to ensure a 5% ripple on .   Q: Include this result in your lab notebook.    Provide a discussion in your lab notebook based on guidelines provided in .   "
},
{
  "id": "sec-labactivities-diode-ac2dc-4-3",
  "level": "2",
  "url": "sec-labactivities-diode-ac2dc.html#sec-labactivities-diode-ac2dc-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bridge full-wave rectifier "
},
{
  "id": "subapp-python-newtonmethod",
  "level": "1",
  "url": "subapp-python-newtonmethod.html",
  "type": "Section",
  "number": "A.1",
  "title": "Newton’s Method",
  "body": " Newton's Method   FINDING THE ROOT OF ONE NONLINEAR EQUATION   Newton's method is a computational algorithm that can be used to find the roots of an equation. Let's illustrate with an example.      In , the solid blue line represents the function . Assume that is an unknown root of such that . We may be able to guess at an approximate value of the root , but this is unlikely to be very precise. Exmining , we can see that we can find a better approximation of the function's root by using a straight-line (dashed red curve) with the same slope as our function at the location of our initial guess, which can be rearranged to find our new estimate We'll call this new approximated root . It's very possible that this new guess still lacks the precision that we desire, so we can repeat the process again, iterating as many times as we desire using until is less than some user-defined tolerance that defines the desired precision, as the change in the estimate to our root from one iteration to the next should become smaller as our estimate approaches the real value of the function's root. Note that this method requires knowledge of the functional form of our function as well as knowledge of or the ability to calculate the analytic form of .  We can be a little more rigorous with the theory underlying Newton's method. Let's assume that we have a function that has a root such that . We can expand our function as a Taylor series around some initial guess for the root, , giving us . Evaluating this expansion at the root gives us . If we divide both sides by and assume that all terms that are order two or higher in are small, then or where is our estimate of the root based on one iteration of this method. Now, the closer is to the real root , the better our estimate will be. So, once we have , we can use this as our new guess for another iteration, giving us a result identical to what we found above, , which we iterate until is less than some user-defined tolerance that defines the desired precision.  A word of caution: Newton's method is not foolproof and it can fail sometimes. Please take a look at other computational methods textbooks or webpages to investigate these failure modes. For the purposes of this text, try several different initial guesses if your first choice leads to a failure of the method.    FINDING THE ROOTS OF A SYSTEM OF NONLINEAR EQUATIONS   Write your equations in the following form: with roots . The Taylor expansion for can be written as so that . Each value can represent the -th equation in a system of equations. This system can be written in vector form as where is the matrix with elements . Since is a root of the equations, we have so that where . Thus, we can get a good estimate of our root, , using where now. This is a set of ordinary linear simultaneous equations of the form which can be solved using the linalg.solve package in NumPy. Once we've solved for , our new estimate of the root is .    Wheatstone Bridge example   "
},
{
  "id": "fig-python-newtonmethodplot",
  "level": "2",
  "url": "subapp-python-newtonmethod.html#fig-python-newtonmethodplot",
  "type": "Figure",
  "number": "A.1.1",
  "title": "",
  "body": "     "
},
{
  "id": "app-matrices",
  "level": "1",
  "url": "app-matrices.html",
  "type": "Appendix",
  "number": "B",
  "title": "Matrices",
  "body": " Matrices   Properties of Matrices    A matrix is an array of numbers . In order to use matrices to solve systems of equations, we must understand how to multiply matrices using the dot product.  Suppose we have matrix that has the form where is the matrix element in the -th row and -th column. Now, if we multiply a matrix by a scalar, we find .  Let's now say that we want to multiply matrices and to find where . First off, is only defined if has a number of columns that is equal to the number of rows of . In other words, is only defined for matrices where is an matrix and is an matrix. Now we have . The elements of are given by where is the number of columns of and equivalently the number of rows in . In other words, and . In other words, in order to find , you can multiply, element-by-element, the cells in row i of with the cells in column k of . The resulting matrix will have the same number of rows as and same number of columns as .  The identity matrix , typically labeled is another concept that will be necessary to understand. The identity matrix is defined such that for any matrix . In order to have this property, the identity matrix must be a square matrix with dimensions (same number of rows and columns) with values of 1 on the diagonal and 0 everywhere else: . The identity matrix can have any value of in order to make the desired matrix multiplication work.  Now, let's say that we have an equation and let's further assume that we have prior knowledge of both and . How do we find ? We cannot perform division with matrices. Instead, we use the concept of an inverse matrix . Let's define to be the inverse matrix of such that . Then, we can multiply both sides of our equation by to get . You can learn how to find given knowledge of in a linear algebra course. For our purposes, we will just rely on Python to invert matrices.    Connecting to systems of equations    Coming soon.   "
},
{
  "id": "app-matrices-2-6",
  "level": "2",
  "url": "app-matrices.html#app-matrices-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "app-matrices-2-7",
  "level": "2",
  "url": "app-matrices.html#app-matrices-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse matrix "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
