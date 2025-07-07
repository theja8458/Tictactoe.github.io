# Tic Tac Toe Game

A classic Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript. This interactive web game allows two players to take turns placing X's and O's on a 3x3 grid until one player wins or the game ends in a draw.

## 🎮 Game Features

- **Two-Player Gameplay**: Alternating turns between Player O and Player X
- **Win Detection**: Automatically detects winning combinations
- **Visual Feedback**: Different colors for X (red) and O (blue) markers
- **Game Reset**: Reset button to start a new game anytime
- **Winner Announcement**: Modal popup displaying the winner
- **Responsive Design**: Clean, centered layout that works on different screen sizes

## 🎯 How to Play

1. The game starts with Player O's turn
2. Click on any empty box to place your marker
3. Players alternate turns (O → X → O → X...)
4. First player to get three markers in a row (horizontally, vertically, or diagonally) wins
5. Click "Reset Game" to start over, or "New Game" after a winner is declared

## 🏆 Winning Conditions

The game checks for wins in 8 possible patterns:
- **Rows**: Top (0,1,2), Middle (3,4,5), Bottom (6,7,8)
- **Columns**: Left (0,3,6), Center (1,4,7), Right (2,5,8)
- **Diagonals**: Main (0,4,8), Anti (2,4,6)

## 🛠️ Technical Implementation

### File Structure
```
├── index.html      # Game structure and layout
├── style.css       # Styling and responsive design
├── script.js       # Game logic and interactivity
└── README.md       # Documentation
```

### Key Components

#### HTML Structure
- **Game Grid**: 9 clickable buttons representing the tic-tac-toe board
- **Control Buttons**: Reset game functionality
- **Message Container**: Winner announcement modal (hidden by default)

#### CSS Styling
- **Color Scheme**: Teal background (#548687) with cream game boxes (#ffffc7)
- **Layout**: Flexbox-based centering and responsive design
- **Visual Effects**: Box shadows and rounded corners for modern appearance
- **Typography**: Large, clear fonts for game markers and messages

#### JavaScript Logic
- **Turn Management**: Boolean flag (`turnO`) to track current player
- **Event Handling**: Click listeners for game boxes and control buttons
- **Win Detection**: Iterates through winning patterns to check for matches
- **Game State**: Functions to enable/disable boxes and reset game state

### Core Functions

| Function | Purpose |
|----------|---------|
| `resetGame()` | Resets the game state and enables all boxes |
| `disableBoxes()` | Disables all game boxes (used after win) |
| `ensableBoxes()` | Enables all boxes and clears content |
| `showWinner()` | Displays winner message and disables game |
| `chekWinner()` | Checks all winning patterns for a match |

## 🎨 Design Features

- **Responsive Grid**: Uses `vmin` units for consistent sizing across devices
- **Visual Hierarchy**: Clear distinction between game area and controls
- **Color Coding**: Red for X, Blue for O for easy identification
- **Smooth Interactions**: Hover effects and clean button styling
- **Modal Overlay**: Winner announcement with prominent display

## 🚀 Getting Started

1. **Clone or Download**: Get the project files
2. **Open**: Simply open `index.html` in any modern web browser
3. **Play**: No installation or setup required - start playing immediately!

## 🌐 Browser Compatibility

This game works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## 🔧 Customization Options

The game can be easily customized by modifying:

- **Colors**: Change the color scheme in `style.css`
- **Sizes**: Adjust box dimensions using the `vmin` values
- **Animations**: Add CSS transitions for smoother interactions
- **Sound Effects**: Extend JavaScript to include audio feedback
- **AI Player**: Implement computer opponent logic

## 📱 Responsive Design

The game automatically adapts to different screen sizes using:
- Viewport-relative units (`vmin`, `vh`)
- Flexbox layout for centering
- Scalable font sizes for readability

## 🐛 Known Issues

- No draw/tie detection implemented
- Minor typo in function name (`ensableBoxes` should be `enableBoxes`)
- Typo in winner message (`Congartulations` should be `Congratulations`)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for:
- Bug fixes
- Feature enhancements
- Code optimizations
- UI/UX improvements

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy playing Tic Tac Toe!** 🎉