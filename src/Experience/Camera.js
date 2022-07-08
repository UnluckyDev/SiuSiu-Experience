import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.debug = this.experience.debug
        //this.world = this.experience.world
        // console.log(this);

        if(this.experience.debug.active){
            this.debugFolder = this.debug.ui.addFolder('Camera')
        }

        this.setInstance()
        //this.setOrbitControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(0, 0, 5)
        this.scene.add(this.instance)

        if(this.experience.debug.active)
        {
            this.debugFolder
                .add(this.instance.position, 'x')
                .min(-10)
                .max(10)
                .step(0.1)

            this.debugFolder
                .add(this.instance.position, 'y')
                .min(-10)
                .max(10)
                .step(0.1)

            this.debugFolder
                .add(this.instance.position, 'z')
                .min(-10)
                .max(10)
                .step(0.1)
        }
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        //this.controls.update()

        // if(this.world.bag){
        //     this.instance.lookAt(this.world.bag.position)
        // }
    }
}
