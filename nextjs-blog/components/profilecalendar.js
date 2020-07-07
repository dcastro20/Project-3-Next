import React, { Component } from 'react';
import Calendar from 'react-calendar';
export default class ProfileCalendar extends Component {
    state = {
        value: new Date(),
    }
    onChange = value => this.setState({ value })
    render() {
        const { value } = this.state;
        return (
            <div className="Sample">
                <header>
                    <h1>Plan your Next Workout</h1>
                </header>
                <div className="Sample__container">
                    <main className="Sample__container__content">
                        <Calendar
                            onChange={this.onChange}
                            showWeekNumbers
                            value={value}
                        />
                    </main>
                </div>
            </div>
        );
    }
}