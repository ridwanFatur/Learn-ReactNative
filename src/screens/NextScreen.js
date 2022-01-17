import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

class NextScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { focusDescriptionInput: false, };
	}

	handleTitleInputSubmit() {
		console.log("Test");
		this.setState({ focusDescriptionInput: true });
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text>NextScreen</Text>
				<TextInput
					returnKeyType={"next"}
					autoFocus={true}
					placeholder="Title"
					onSubmitEditing={()=>{
						this.handleTitleInputSubmit();
					}}
				/>
				<TextInput
					multiline={true}
					maxLength={200}
					placeholder="Description"
					focus={this.state.focusDescriptionInput}
				/>
				{/* <TextInput/> */}
			</View>
		);
	}
}

export default NextScreen;