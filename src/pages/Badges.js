import React from "react";
import { Link } from "react-router-dom";
//STYLES
import "./styles/Badges.css";
import ConfLogo from "../images/badge-header.svg";
//COMPONENTS
import BadgeList from "../components/BadgeList";
import api from "../api";

class Badges extends React.Component {
	constructor(props) {
		//inicializa la super clase(Component)
		super(props);
		//inicializar estados
		this.state = {
			loading: true,
			error: null,
			data: undefined,
		};
		console.log("1.constructor");
	}
	//se ejecuta cuando se realiza un cambio
	componentDidMount() {
		console.log("1.constructor");
		//peticion asincrona de datos
		this.fetchData();
	}
	//Funcion asincrona
	fetchData = async () => {
		this.setState({ loading: true, error: null });
		try {
		//trae un promesa
			const data = await api.badges.list();
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};
	//Se utiliza cuando hay una actualizacion y valida
	//los datos anteriores con los actuales y renderiza de nuevo
	componentDidUpdate(prevProps, prevState) {
		console.log("4.componentDidUpdate");
		console.log({
			prevProps: prevProps,
			prevState: prevState,
		});
		console.log({
			state: this.state,
			props: this.props,
		});
	}
	//Se utiliza cuando los componentes salen de escena
	//y hay un cambio en el DOM
	componentWillUnmount() {
		console.log("6.componenWillUnMount");
		clearTimeout(this.setTimeoutId);
	}
	render() {
		console.log("2/4.Render");
		if (this.state.loading === true) {
			return "Loading...";
		}
		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img src={ConfLogo} alt="" className="Badges_conf-logo" />
						</div>
					</div>
				</div>
				<div className="Badge__container w-50 mx-auto d-block">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>
					<div className="Badges__List">
						<div className="Badge__container">
							<BadgeList badgeList={this.state.data} />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default Badges;
