import react from 'react';
import { icons } from '../theme/icons/tag';

export const Hero = () => {
    return (
        <section className='hero'>
            <div className='title'>
                <h1>Типсы и Триксы</h1>
                <h2>Все темы</h2>
            </div>

            <div className='tags'>
                <span>
                    <icons.React /> React
                </span>
                <span>
                    {react.createElement(icons['Node.js'])} Node.js
                </span>
                <span>
                    <icons.JavaScript /> JavaScript
                </span>
                <span>
                    <icons.TypeScript /> TypeScript
                </span>
                <span>
                    {react.createElement(icons['Next.js'])} Next.js
                </span>
                <span>
                    <icons.VSCode /> VSCode
                </span>
                <span>
                    <icons.CSS /> CSS
                </span>
                <span>
                    <icons.Git /> Git
                </span>
                <span>
                    <icons.GraphQL /> GraphQL
                </span>
                <span>
                    {react.createElement(icons['UI/UX'])} UI/UX
                </span>
                <span>
                    <icons.Npm /> Npm
                </span>
                <span>
                    <icons.Testing /> Testing
                </span>
                <span>
                    <icons.macOS /> macOS
                </span>
                <span>
                    <icons.Tools /> Tools
                </span>
            </div>
        </section>
    );
}