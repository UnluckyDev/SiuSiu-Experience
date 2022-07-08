import * as THREE from 'three'
import Experience from "../Experience.js"
import Resources from '../Utils/Resources.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Bag from './Bag.js'
import TestObject from './TestObject.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.camera = this.experience.camera
        this.time = this.experience.time

        this.axesHelper = new THREE.AxesHelper(5)
        // this.cameraHelper = new THREE.CameraHelper(this.camera.instance)

        if(this.experience.debug.active){
            this.scene.add(this.axesHelper)
        }

        //Wait for resources
        this.resources.on('ready', () =>
        {
            //Setup
            // this.floor = new Floor()
            // this.bag = new Bag()

            this.testObj = new TestObject()
            
            this.environment = new Environment()
        })
    }

    update()
    {
        // if(this.bag)
        // {
        // }
    }
}