//% weight=0 color=#f5e505 icon="\uf0ad" block="DDMmotor"
namespace DDMmotor {
	//% blockId=DDMmotor block="Mcontrol pin %McontrolPin|direction of Mcontrol(0~1) %McontrolValue|MSpeed pin %MSpeedPin|speed of MSpeed(0~255) %MSpeedValue" blockExternalInputs=false
    //% McontrolValue.min=0 McontrolValue.max=1 
	//% MSpeedValue.min=0 MSpeedValue.max=255
    //% McontrolPin.fieldEditor="gridpicker" McontrolPin.fieldOptions.columns=4
    //% McontrolPin.fieldOptions.tooltips="false" McontrolPin.fieldOptions.width="300"
	//% MSpeedPin.fieldEditor="gridpicker" MSpeedPin.fieldOptions.columns=4
    //% MSpeedPin.fieldOptions.tooltips="false" MSpeedPin.fieldOptions.width="300"
    
    export function DDMmotor(McontrolPin: DigitalPin,McontrolValue: number,MSpeedPin: AnalogPin,MSpeedValue: number): void {
        pins.digitalWritePin(McontrolPin, pins.map(McontrolValue, 0, 1, 0, 1));
        pins.analogWritePin(MSpeedPin, pins.map(MSpeedValue, 0, 255, 0, 1020));	   
    }
}