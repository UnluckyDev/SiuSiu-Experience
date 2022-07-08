import * as THREE from 'three'
import Experience from "../Experience.js";

export default class TestObject
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.camera = this.experience.camera
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Setup
        
        
        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('SuzanneTest')
        }

        //Setup
        this.resource = this.resources.items.testModel
        
        this.setModel()
    }

    setModel()
    {
        // this.model = this.resource.scene
        // this.model.scale.set(1, 1, 1)
        // this.scene.add(this.model)

        // this.model.traverse((child) =>
        // {
        //     if(child instanceof THREE.Mesh)
        //     {
        //         child.castShadow = true
        //     }
        // })

        this.boxGeometry = new THREE.BoxGeometry(1.5, 1.2, 1)
        this.boxMaterial = new THREE.MeshStandardMaterial({color: '#f0f0f0'})
        this.boxMesh = new THREE.Mesh(
            this.boxGeometry,
            this.boxMaterial
        )
        this.boxMesh.position.set(0, 0, 0)
        this.scene.add(this.boxMesh)
    }
}