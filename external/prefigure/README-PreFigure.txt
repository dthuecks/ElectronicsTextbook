# Standalone use:
prefig build source/prefigure/npn-block-drawing.xml
prefig view npn-block-drawing


# Prefigure source inside PreTeXt document:

<image width="60%">
  <prefigure xmlns="https://prefigure.org"
             label="prefigure-rectangle">
    <diagram dimensions="(300,300)" margins="5">
      <coordinates bbox="(0,0,10,10)">
        <grid-axes/>
        <rectangle center="(5,5)" dimensions="(6,6)"/>
        <label anchor="(0.5,0.5)" alignment="ne"
               clear-background="yes">
          The derivative is <m>\deriv{y}{x}</m>.
        </label>
      </coordinates>
    </diagram>
  </prefigure>
</image>


