import * as THREE from 'three'
import * as dat from 'lil-gui'
import Experience from "../Experience.js";

export default class Debug
{
    constructor()
    {
        this.active = window.location.hash === '#debug'
        // this.cameraHelper = new THREE.CameraHelper(this.experience.camera)

        if(this.active)
        {
            this.ui = new dat.GUI()
        }
    }
}