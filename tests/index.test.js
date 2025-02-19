import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('Snake Game HTML', () => {
    let dom;
    let document;

    beforeEach(() => {
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
        dom = new JSDOM(html);
        document = dom.window.document;
        global.document = document;
        global.window = dom.window;
    });

    test('should have correct page title', () => {
        expect(document.title).toBe('Jogo da Minhoca');
    });

    test('should have game canvas with correct dimensions', () => {
        const canvas = document.getElementById('gameCanvas');
        expect(canvas).toBeTruthy();
        expect(canvas.width).toBe(320);
        expect(canvas.height).toBe(320);
    });

    test('should have score display elements', () => {
        const score = document.getElementById('score');
        const highScore = document.getElementById('high-score');
        expect(score).toBeTruthy();
        expect(highScore).toBeTruthy();
        expect(score.textContent).toBe('0');
        expect(highScore.textContent).toBe('0');
    });

    test('should have three difficulty buttons', () => {
        const buttons = document.querySelectorAll('.controls button');
        expect(buttons.length).toBe(3);
        expect(buttons[0].textContent).toBe('Fácil');
        expect(buttons[1].textContent).toBe('Médio');
        expect(buttons[2].textContent).toBe('Difícil');
    });

    test('should have required stylesheet link', () => {
        const styleLink = document.querySelector('link[rel="stylesheet"]');
        expect(styleLink).toBeTruthy();
        expect(styleLink.href).toContain('styles.css');
    });

    test('should have required script file', () => {
        const script = document.querySelector('script[src="scripts.js"]');
        expect(script).toBeTruthy();
    });

    test('should have proper meta tags', () => {
        const metaCharset = document.querySelector('meta[charset]');
        const metaViewport = document.querySelector('meta[name="viewport"]');
        expect(metaCharset.getAttribute('charset')).toBe('UTF-8');
        expect(metaViewport.getAttribute('content')).toBe('width=device-width, initial-scale=1.0');
    });
});
