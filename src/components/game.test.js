import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from "./game";

describe("Game status", () =>{
	it("Renders Game status without crazhing",()=>{
		shallow(<Game />);
	});

	it("should have initial state",()=>{
		const wrapper = shallow(<Game />);
		expect(wrapper.state("guesses")).toEqual([]);
		expect(wrapper.state("feedback")).toEqual("Make your guess!");
		expect(wrapper.state("auralStatus")).toEqual("");
		let num = wrapper.state("correctAnswer");
		expect((typeof num) === "number").toEqual(true);
	});

	it("should have initial state on new game click",()=>{
		const wrapper = shallow(<Game />);
		wrapper.setState({feedback:"test"});
		wrapper.instance().restartGame();
		expect(wrapper.state("guesses")).toEqual([]);
		expect(wrapper.state("feedback")).toEqual("Make your guess!");
		expect(wrapper.state("auralStatus")).toEqual("");
		let num = wrapper.state("correctAnswer");
		expect((typeof num) === "number").toEqual(true);
	});

});