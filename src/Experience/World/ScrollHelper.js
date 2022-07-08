import * as THREE from 'three'
import Experience from '../Experience.js'

export default class ScrollHelper
{
    constructor()
    {
        this.experience = new Experience()
        this.camera = this.experience.camera
        this.sizes = this.experience.sizes
        this.world = this.experience.world

        this.scrollY = window.scrollY
        this.currentSection = 0

        window.addEventListener('scroll', () =>
        {
            //console.log(window.scrollY);
            this.scrollY = window.scrollY

            this.newSection = Math.round(this.scrollY / this.sizes.height)
            
            this.changeSection(this.newSection)
        })
    }

    changeSection(sectionNumber)
    {

        this.camera.instance.position.y = - (this.scrollY / this.sizes.height)

        // TestObj
        if(this.world.testObj)
        {
            // this.world.testObj.model.position.y = - (this.scrollY / this.sizes.height)
            this.world.testObj.boxMesh.position.y = - (this.scrollY / this.sizes.height)
        }

        console.log(this.world.testObj);

        if(this.newSection != this.currentSection)
            {
                this.currentSection = this.newSection

                //TODO trigger funzione movimento della borsa
                //this.camera.instance.position.y = - (this.scrollY / this.sizes.height)
            }
    }
}