class Tooltip extends HTMLElement {
    constructor() {
      super();
      this.tooltip = null;
      this.tooltipText = "dummy Tooltip"
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        if(this.hasAttribute('text')){
            this.tooltipText = this.getAttribute('text')
        }
      var tooltipIcon = document.createElement("span");
      tooltipIcon.innerText = "(?)";
      tooltipIcon.addEventListener("mouseenter", this.showTooltip.bind(this));
      tooltipIcon.addEventListener("mouseleave", this.hideTooltip.bind(this));
      this.style.position = "relative";
      this.style.cursor = "pointer";
  
      this.shadowRoot.appendChild(tooltipIcon);
    }
    showTooltip() {
      this.tooltip = document.createElement("div");
      this.tooltip.innerHTML = this.tooltipText;
      this.tooltip.style.width = "150px";
      this.tooltip.style.padding = "5px";
      this.tooltip.style.border = "1px solid gray";
      this.tooltip.style.borderRadius = "3px";
      this.tooltip.style.fontFamily = "Verdana";
      this.tooltip.style.fontSize = "10px";
      this.tooltip.style.color = "white";
      this.tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      this.tooltip.style.position = "absolute";
      this.tooltip.style.top = "-20px";
      this.tooltip.style.left = "10px";
  
      this.shadowRoot.appendChild(this.tooltip);
    }
    hideTooltip() {
      this.shadowRoot.removeChild(this.tooltip);
    }
  }
  
  customElements.define("uc-tooltip", Tooltip);