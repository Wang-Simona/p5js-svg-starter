// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Font {
        /**
         *   A class to describe fonts.
         *
         *   @param [pInst] pointer to p5 instance.
         */
        constructor(pInst?: p5);

        /**
         *   Returns the bounding box for a string of text
         *   written using the font. The bounding box is the
         *   smallest rectangle that can contain a string of
         *   text. font.textBounds() returns an object with the
         *   bounding box's location and size. For example,
         *   calling font.textBounds('p5*js', 5, 20) returns an
         *   object in the format { x: 5.7, y: 12.1 , w: 9.9,
         *   h: 28.6 }. The x and y properties are always the
         *   coordinates of the bounding box's top-left corner.
         *
         *   The first parameter, str, is a string of text. The
         *   second and third parameters, x and y, are the
         *   text's position. By default, they set the
         *   coordinates of the bounding box's bottom-left
         *   corner. See textAlign() for more ways to align
         *   text.
         *
         *   The fourth parameter, fontSize, is optional. It
         *   sets the font size used to determine the bounding
         *   box. By default, font.textBounds() will use the
         *   current textSize().
         *   @param str string of text.
         *   @param x x-coordinate of the text.
         *   @param y y-coordinate of the text.
         *   @param [fontSize] font size. Defaults to the
         *   current textSize().
         *   @return object describing the bounding box with
         *   properties x, y, w, and h.
         */
        textBounds(str: string, x: number, y: number, fontSize?: number): object;

        /**
         *   Returns an array of points outlining a string of
         *   text written using the font. Each point object in
         *   the array has three properties that describe the
         *   point's location and orientation, called its path
         *   angle. For example, { x: 10, y: 20, alpha: 450 }.
         *
         *   The first parameter, str, is a string of text. The
         *   second and third parameters, x and y, are the
         *   text's position. By default, they set the
         *   coordinates of the bounding box's bottom-left
         *   corner. See textAlign() for more ways to align
         *   text.
         *
         *   The fourth parameter, fontSize, is optional. It
         *   sets the text's font size. By default,
         *   font.textToPoints() will use the current
         *   textSize().
         *
         *   The fifth parameter, options, is also optional.
         *   font.textToPoints() expects an object with the
         *   following properties:
         *
         *   sampleFactor is the ratio of the text's path
         *   length to the number of samples. It defaults to
         *   0.1. Higher values produce more points along the
         *   path and are more precise.
         *
         *   simplifyThreshold removes collinear points if it's
         *   set to a number other than 0. The value represents
         *   the threshold angle to use when determining
         *   whether two edges are collinear.
         *   @param str string of text.
         *   @param x x-coordinate of the text.
         *   @param y y-coordinate of the text.
         *   @param [fontSize] font size. Defaults to the
         *   current textSize().
         *   @param [options] object with sampleFactor and
         *   simplifyThreshold properties.
         *   @return array of point objects, each with x, y,
         *   and alpha (path angle) properties.
         */
        textToPoints(str: string, x: number, y: number, fontSize?: number, options?: object): any[];

        /**
         *   The font's underlying opentype.js font object.
         */
        font: any;
    }
}
