import styled from 'styled-components/macro';

export const GameLayout = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-flow: column nowrap;
	color: #fff;
	background: #1e3c72;
	background: -webkit-linear-gradient(to right, #2a5298, #1e3c72);
	background: linear-gradient(to right, #2a5298, #1e3c72);

	.header {
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		padding: 20px;

		span {
			font-weight: 600;
			font-family: monospace;
			font-size: 23px;
			background: rgba(255, 255, 255, 0.1);
			padding: 10px;
			border-radius: 6px;
		}

		span:not(:last-of-type) {
			margin-right: 20px;
		}

		span:last-of-type {
			margin-left: auto;
		}
	}

	.game-content {
		flex: 1;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		padding: 30px 0;

		h2 {
			font-weight: 600;
			font-family: monospace;
			font-size: 23px;
		}

		.game-content-word {
			display: flex;
			flex-flow: row wrap;
			width: 800px;
			background: #fff;
			border-radius: 6px;
			border: solid 1px gray;
			filter: drop-shadow(2px 6px 10px rgba(0, 0, 0, 0.2));
			padding: 10px;

			.word-item {
				display: flex;
				margin: 0 20px;
				font-size: 28px;
				line-height: 40px;
				letter-spacing: 2px;
				font-weight: 600;
				font-family: monospace;
				padding: 0 5px;

				&.active {
					background: #c1d7ff;
					border-radius: 6px;
				}

				.char-item {
					&.rule-0 {
						color: black;
					}

					&.rule-1 {
						color: green;
					}

					&.rule-2 {
						color: red;
					}
				}
			}
		}
	}

	.game-content-type {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		.game-over {
			margin-top: 100px;
			font-weight: 600;
			font-family: monospace;
			font-size: 23px;
			margin-right: 20px;
			display: flex;
			align-items: center;
		}
	}
`;
