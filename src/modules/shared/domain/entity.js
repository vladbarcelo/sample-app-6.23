export class GenericEntity {
  constructor(props) {
    this.props = props;
  }

  get id() {
    return this.props.id;
  }
}
