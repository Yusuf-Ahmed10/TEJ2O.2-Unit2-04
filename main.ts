/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Yusuf Ahmed
 * Created on: Feb 2026
 * This program tells the temperature
*/

let temperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showString('The temperature is' + temperature + 'C')
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
})
