import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from "./aural-status";

describe("Aural status", () =>{
	it("Renders aural status without crazhing",()=>{
		shallow(<AuralStatus />);
	});

	it("Renders text passed to aural status",()=>{
		const text = "test text";
		const wrapper = shallow(<AuralStatus auralStatus={text}/>);
		expect(wrapper.text()).toEqual(text);
	});

});