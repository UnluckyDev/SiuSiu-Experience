import * as THREE from 'three'
import EventEmitter from "../Utils/EventEmitter.js";
import Experience from "../Experience.js";

export default class Bag extends EventEmitter
{
    constructor()
    {
        super()

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('bag')
        }

        //Setup
        this.resource = this.resources.items.bagModel
        
        this.setModel()
        //this.setAnimation()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(0.05, 0.05, 0.05)
        this.model.position.set(0, 0, 0)
        this.scene.add(this.model)
        console.log('bag added to scene');
        this.trigger('bagLoaded')
        // this.model.traverse((child) =>
        // {
        //     if(child instanceof THREE.Mesh)
        //     {
        //         child.castShadow = true
        //         console.log(child);
        //     }
        // })
    }

    update()
    {
        //this.animation.mixer.update(this.time.delta * 0.001)
    }
}