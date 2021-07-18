import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': ''Ubuntu', sans-serif'
  },
  'body': {
    'background': '#fff !important'
  },
  'html': {
    'scrollBehavior': 'smooth'
  },
  'banner-container': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'img-banner': {
    'display': 'flex',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'img-banner:hover': {
    'width': [{ 'unit': '%H', 'value': 0.99 }]
  },
  'img-banner-cel': {
    'display': 'none',
    '<w480': {
      'display': 'flex',
      'justifyContent': 'center',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'produto-container': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'produto': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(220, 235, 227)' }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '#a7711b' }],
    'width': [{ 'unit': 'px', 'value': 310 }],
    'height': [{ 'unit': 'px', 'value': 360 }],
    'borderRadius': '10px',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 1 }],
    'background': '#FFF6E7',
    'cursor': 'pointer'
  },
  'produto:hover': {
    'width': [{ 'unit': 'px', 'value': 320 }],
    'height': [{ 'unit': 'px', 'value': 370 }]
  },
  'titulo': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }],
    'color': '#940039',
    'background': '#FFF6E7',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'salmon' }]
  },
  'valor': {
    'fontWeight': '900',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }],
    'background': '#FFF6E7',
    'color': 'palevioletred'
  },
  'titulo h1': {
    'borderRadius': '2rem',
    'color': 'salmon',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }]
  },
  'formulario-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'form': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'flexWrap': 'wrap',
    'flexDirection': 'column',
    'borderRadius': '10px',
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'justifyContent': 'center',
    'textAlign': 'center',
    'background': '#FFF6E7'
  },
  'logo-img': {
    'width': [{ 'unit': 'px', 'value': 150 }]
  },
  'input': {
    'display': 'flex',
    'flexDirection': 'column',
    'width': [{ 'unit': 'px', 'value': 300 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }],
    'justifyContent': 'center',
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'borderRadius': '10px',
    'borderStyle': 'none',
    'color': 'black',
    'outlineStyle': 'none',
    '<w667': {
      'width': [{ 'unit': 'px', 'value': 200 }]
    }
  },
  'h1': {
    'color': 'salmon',
    'background': '#FFF6E7',
    'textAlign': 'center',
    'fontWeight': '900px',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }]
  },
  'botao': {
    'display': 'flex',
    'flexDirection': 'column',
    'width': [{ 'unit': 'px', 'value': 310 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'alignItems': 'center',
    'background': 'salmon',
    'borderRadius': '10px',
    'color': '#fff',
    'cursor': 'pointer'
  },
  'botao:hover': {
    'background': 'salmon'
  },
  'footer': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'justifyContent': 'center',
    'alignItems': 'center',
    'display': 'flex',
    'background': 'salmon',
    'color': '#fff'
  },
  'a': {
    'textDecoration': 'none',
    'color': '#fff'
  }
});
