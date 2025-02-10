import React from "react";

interface Props {
  children: any;
}

export class ShadowRoot extends React.Component {
  attachShadow(host: HTMLElement) {
    if (host == null) {
      return;
    }
    host.attachShadow({ mode: "open" });
    if (host.shadowRoot === null) {
      return;
    }
    host.shadowRoot.innerHTML = host.innerHTML;
    host.innerHTML = "";
  }

  render() {
    // @ts-ignore
    return <span ref={this.attachShadow}>{this.props.children}</span>;
  }
}
