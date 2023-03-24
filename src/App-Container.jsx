import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { compose } from "redux"
import App from "./App"


const withRouter = WrappedComponent => props => {
    const params = useParams()
    // etc... other react-router-dom v6 hooks

    return (<WrappedComponent {...props} params={params} />
    )
}


const mapStateToProps = (state) => {

    return {
       

    }
}
const AppContainer = (props) => {

    useEffect(() => {
        
        // if (!props.isAuth) {
        //     props.initialize()
   
        // } else {
        //     console.log('allready initialized')
        // }



    }, [])


    
        
   

    return <App {...props} />

}


export default compose(

    connect(mapStateToProps, {
   
    }),

    withRouter
)(AppContainer)