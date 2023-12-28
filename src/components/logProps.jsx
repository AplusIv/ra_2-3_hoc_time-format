import React from "react";

function logProps(WrappedComponent) {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    render() {
      console.log('Текущие пропсы: ', this.props)
      // Оборачиваем компонент в контейнер без мутаций. Супер!
      return <WrappedComponent {...this.props} />
    }
  }
}

export default logProps;