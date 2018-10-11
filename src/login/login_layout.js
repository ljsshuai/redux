import React from 'react';
import './login.css'
import {Link} from 'react-router-dom'
class LoginLayout extends React.Component{
    constructor(props)
    {
        super(props);
    }
    componentWillMount()
    {
        document.title="登陆-虎影智库";

    }
    componentDidMount(){
        console.log(window.pJS)
        console.log(document.getElementsByTagName('canvas')[0]);
        // if(){
        //
        // }
        // if(window.pJS!==undefined){
        //     delete window.pJS;
        var list=document.getElementById("particles-js");
        if(list.childNodes[0]){
            list.removeChild(list.childNodes[0]);
                // delete window.pJS;
        }
        // }
            new particlesJS('particles-js', {
                particles: {
                    color: '#fff',
                    shape: 'circle', // "circle", "edge" or "triangle"
                    opacity: 1,
                    size: 4,
                    size_random: true,
                    nb: 150,
                    line_linked: {
                        enable_auto: true,
                        distance: 100,
                        color: '#fff',
                        opacity: 1,
                        width: 1,
                        condensed_mode: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600
                        }
                    },
                    anim: {
                        enable: true,
                        speed: 1
                    }
                },
                interactivity: {
                    enable: true,
                    mouse: {
                        distance: 300
                    },
                    detect_on: 'canvas', // "canvas" or "window"
                    mode: 'grab',
                    line_linked: {
                        opacity: 0.5
                    },
                    events: {
                        onclick: {
                            enable: true,
                            mode: 'push', // "push" or "remove"
                            nb: 4
                        }
                    }
                },
                /* Retina Display Support */
                retina_detect: true
            });
            // delete window.pJS;
        // delete window.pJS.particles.speed
        // console.log()
    }
    render(){
        return(
            <div>
                <div id="particles-js"></div>
            </div>
        );
    }
}
export default LoginLayout;