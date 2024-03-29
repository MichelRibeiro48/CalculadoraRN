import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
export default function Home() {
  const [number, setNumber] = useState('')
  const [number1, setNumber1] = useState('')
  const [history, setHistory] = useState('')
  const [operator, setOperator] = useState('')
  const [isLog, setIsLog] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.text}>Calculadora</Text>
      <View style={styles.title}>
        <Text style={{ color: 'white' }}>
          {isLog ? `log(${number})` : number}
        </Text>
      </View>
      <Text style={{ color: 'white', marginTop: 10 }}>{history}</Text>
      <View style={{ flexDirection: 'row', marginTop: '30%' }}>
        <View>
          <View style={[styles.containerRow, { marginTop: 10 }]}>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '1')}
            >
              <Text style={{ color: 'white' }}>1</Text>
            </Pressable>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '2')}
            >
              <Text style={{ color: 'white' }}>2</Text>
            </Pressable>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '3')}
            >
              <Text style={{ color: 'white' }}>3</Text>
            </Pressable>
          </View>
          <View style={styles.containerRow}>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '4')}
            >
              <Text style={{ color: 'white' }}>4</Text>
            </Pressable>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '5')}
            >
              <Text style={{ color: 'white' }}>5</Text>
            </Pressable>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '6')}
            >
              <Text style={{ color: 'white' }}>6</Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '7')}
            >
              <Text style={{ color: 'white' }}>7</Text>
            </Pressable>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '8')}
            >
              <Text style={{ color: 'white' }}>8</Text>
            </Pressable>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '9')}
            >
              <Text style={{ color: 'white' }}>9</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '0')}
            >
              <Text style={{ color: 'white' }}>0</Text>
            </Pressable>
            <Pressable
              style={styles.padNumber}
              onPress={() => setNumber(number + '.')}
            >
              <Text style={{ color: 'white' }}>.</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={styles.containerOpRow}>
            <Pressable
              style={styles.padOperatorRight}
              onPress={() => setNumber(number.slice(0, -1))}
              onLongPress={() => setNumber('')}
            >
              <Pressable>
                <Feather name="delete" size={18} color="white" />
              </Pressable>
            </Pressable>
            <Pressable
              style={styles.padOperatorLeft}
              onPress={() => {
                if (number1.length > 0) {
                  setOperator('+')
                  if (number.length <= 0) {
                    if (
                      history[history.length - 1].match(
                        /^[ `!@#$%^&*()÷_+\-=\[\]{};':"\\|,.<>\/?~]+$/g
                      )
                    ) {
                      setHistory(history.slice(0, -1) + '+')
                    } else {
                      setHistory(history + '+')
                    }
                  } else {
                    const teste = parseFloat(number1) + parseFloat(number)
                    setNumber1(teste.toString())
                    setHistory(teste.toString() + '+')
                    setNumber('')
                  }
                } else {
                  const newNumber = Math.log2(parseFloat(number))
                  if (isLog) {
                    setHistory(newNumber + '+')
                    setNumber1(newNumber.toString())
                  } else {
                    setHistory(number + '+')
                    setNumber1(number)
                  }
                  setNumber('')
                  setOperator('+')
                  setIsLog(false)
                }
              }}
            >
              <Text style={{ color: 'white' }}>+</Text>
            </Pressable>
          </View>
          <View style={styles.containerOpRow}>
            <Pressable
              style={styles.padOperatorRight}
              onPress={() => {
                if (number1.length > 0) {
                  setOperator('-')
                  if (number.length <= 0) {
                    if (
                      history
                        .slice(-1)
                        .match(/^[ `!@#$%^&*()÷_+\-=\[\]{};':"\\|,.<>\/?~]+$/g)
                    ) {
                      setHistory(history.slice(0, -1) + '-')
                    } else {
                      setHistory(history + '-')
                    }
                    return
                  } else {
                    const teste = parseFloat(number1) - parseFloat(number)
                    const newNumber = Math.log2(parseFloat(number))
                    setHistory(isLog ? newNumber.toString() + '-' : teste + '-')
                    setNumber1(teste.toString())
                    setNumber('')
                  }
                } else {
                  const newNumber = Math.log2(parseFloat(number))
                  if (isLog) {
                    setHistory(newNumber + '-')
                    setNumber1(newNumber.toString())
                  } else {
                    setHistory(number + '-')
                    setNumber1(number)
                  }
                  setNumber('')
                  setOperator('-')
                  setIsLog(false)
                }
              }}
            >
              <Text style={{ color: 'white' }}>-</Text>
            </Pressable>
            <Pressable
              style={styles.padOperatorLeft}
              onPress={() => {
                if (number1.length > 0) {
                  setOperator('*')

                  if (number.length <= 0) {
                    if (
                      history[history.length - 1].match(
                        /^[ `!@#$%^&*()÷_+\-=\[\]{};':"\\|,.<>\/?~]+$/g
                      )
                    ) {
                      setHistory(history.slice(0, -1) + '*')
                    } else {
                      setHistory(history + '*')
                    }
                    return
                  } else {
                    const teste = parseFloat(number1) * parseFloat(number)
                    setNumber1(teste.toString())
                    setHistory(teste.toString() + '*')
                    setNumber('')
                  }
                } else {
                  const newNumber = Math.log2(parseFloat(number))
                  if (isLog) {
                    setHistory(newNumber + '*')
                    setNumber1(newNumber.toString())
                  } else {
                    setHistory(number + '*')
                    setNumber1(number)
                  }
                  setNumber('')
                  setOperator('*')
                  setIsLog(false)
                }
              }}
            >
              <Text style={{ color: 'white' }}>*</Text>
            </Pressable>
          </View>
          <View style={styles.containerOpRow}>
            <Pressable
              style={styles.padOperatorRight}
              onPress={() => {
                if (number1.length > 0) {
                  setOperator('÷')
                  if (number.length <= 0) {
                    if (
                      history[history.length - 1].match(
                        /^[ `!@#$%^&*()÷_+\-=\[\]{};':"\\|,.<>\/?~]+$/g
                      )
                    ) {
                      setHistory(history.slice(0, -1) + '÷')
                    } else {
                      setHistory(history + '÷')
                    }
                    return
                  } else {
                    const teste = parseFloat(number1) / parseFloat(number)
                    setNumber1(teste.toString())
                    setHistory(teste.toString() + '÷')
                    setNumber('')
                  }
                } else {
                  const newNumber = Math.log2(parseFloat(number))
                  if (isLog) {
                    setHistory(newNumber + '÷')
                    setNumber1(newNumber.toString())
                  } else {
                    setHistory(number + '÷')
                    setNumber1(number)
                  }
                  setNumber('')
                  setOperator('÷')
                  setIsLog(false)
                }
              }}
            >
              <Text style={{ color: 'white' }}>÷</Text>
            </Pressable>
            <Pressable
              style={styles.padOperatorLeft}
              onPress={() => {
                if (number1.length > 0) {
                  setOperator('^')

                  if (number.length <= 0) {
                    if (
                      history[history.length - 1].match(
                        /^[ `!@#$%^&*()÷_+\-=\[\]{};':"\\|,.<>\/?~]+$/g
                      )
                    ) {
                      setHistory(history.slice(0, -1) + '^')
                    } else {
                      setHistory(history + '^')
                    }
                    return
                  } else {
                    const teste = parseFloat(number1) ** parseFloat(number)
                    setNumber1(teste.toString())
                    setHistory(teste.toString() + '^')
                    setNumber('')
                  }
                } else {
                  const newNumber = Math.log2(parseFloat(number))
                  if (isLog) {
                    setHistory(newNumber + '^')
                    setNumber1(newNumber.toString())
                  } else {
                    setHistory(number + '^')
                    setNumber1(number)
                  }
                  setNumber('')
                  setOperator('^')
                  setIsLog(false)
                }
              }}
            >
              <Text style={{ color: 'white' }}>^</Text>
            </Pressable>
          </View>
          <View style={styles.containerOpRow}>
            <Pressable
              style={styles.padOperatorRight}
              onPress={() => {
                if (number1.length > 0) {
                  if (number.length <= 0) {
                    if (
                      history[history.length - 1].match(
                        /^[ `!@#$%^&*()÷_+\-=\[\]{};':"\\|,.<>\/?~]+$/g
                      )
                    ) {
                      setHistory(history.slice(0, -1) + '%')
                    } else {
                      setHistory(history + '%')
                    }
                  } else {
                    const porcentagem =
                      (parseFloat(number1) * parseFloat(number)) / 100
                    switch (operator) {
                      case '+':
                        setHistory(
                          (porcentagem + parseFloat(number1)).toString()
                        )
                        setNumber1(
                          (porcentagem + parseFloat(number1)).toString()
                        )
                        break
                      case '*':
                        setHistory(
                          (porcentagem * parseFloat(number1)).toString()
                        )
                        setNumber1(
                          (porcentagem * parseFloat(number1)).toString()
                        )
                        break
                      case '-':
                        setHistory(
                          (porcentagem - parseFloat(number1)).toString()
                        )
                        setNumber1(
                          (porcentagem - parseFloat(number1)).toString()
                        )
                        break
                      case '/':
                        setHistory(
                          (porcentagem / parseFloat(number1)).toString()
                        )
                        break
                      case '^':
                        setHistory(
                          (porcentagem ** parseFloat(number1)).toString()
                        )
                        setNumber1(
                          (porcentagem ** parseFloat(number1)).toString()
                        )
                        break
                    }
                    setNumber('')
                  }
                } else {
                  setHistory('0'), setNumber('')
                  setNumber1('0')
                }
              }}
            >
              <Text style={{ color: 'white' }}>%</Text>
            </Pressable>
            <Pressable
              style={styles.padOperatorLeft}
              onPress={() => {
                setIsLog(true)
                setOperator('Log')
              }}
            >
              <Text style={{ color: 'white' }}>LOG2</Text>
            </Pressable>
          </View>
          <View style={styles.containerOpRow}>
            <Pressable
              style={styles.padOperatorRight}
              onPress={() => {
                if (number1.length > 0) {
                  switch (operator) {
                    case '+':
                      setHistory((Math.E + parseFloat(number1)).toString())
                      setNumber1((Math.E + parseFloat(number1)).toString())
                      break
                    case '*':
                      setHistory((Math.E * parseFloat(number1)).toString())
                      setNumber1((Math.E * parseFloat(number1)).toString())
                      break
                    case '-':
                      let newNumber = (parseFloat(number1) * Math.E).toString()
                      setHistory(newNumber)
                      setNumber1(newNumber)
                      break
                    case '÷':
                      newNumber = (parseFloat(number1) / Math.E).toString()
                      setHistory(newNumber)
                      setNumber1(newNumber)
                      break
                    case '^':
                      setHistory((Math.E ** parseFloat(number1)).toString())
                      setNumber1((Math.E ** parseFloat(number1)).toString())
                      break
                    default:
                      setNumber1(Math.E.toString())
                      setHistory(Math.E.toString())
                      break
                  }
                } else {
                  setNumber1(Math.E.toString())
                  setHistory(Math.E.toString())
                }
              }}
            >
              <Text style={{ color: 'white' }}>EULER</Text>
            </Pressable>
            <Pressable
              style={styles.padOperatorLeft}
              onPress={() => {
                if (number1.length > 0) {
                  switch (operator) {
                    case '+':
                      let newNumber = parseFloat(number1) + Math.PI
                      setHistory((Math.PI + parseFloat(number1)).toString())
                      setNumber1((Math.PI + parseFloat(number1)).toString())
                      break
                    case '*':
                      newNumber = parseFloat(number1) * Math.PI
                      setHistory((Math.PI * parseFloat(number1)).toString())
                      setNumber1((Math.PI * parseFloat(number1)).toString())
                      break
                    case '-':
                      newNumber = parseFloat(number1) - Math.PI
                      setHistory(newNumber.toString())
                      setNumber1(newNumber.toString())
                      break
                    case '÷':
                      newNumber = parseFloat(number1) / Math.PI
                      setHistory(newNumber.toString())
                      break
                    case '^':
                      newNumber = parseFloat(number1) ** Math.PI
                      setHistory(newNumber.toString())
                      setNumber1(newNumber.toString())
                      break
                    default:
                      setNumber1(Math.PI.toString())
                      setHistory(Math.PI.toString())
                      break
                  }
                } else {
                  setNumber1(Math.PI.toString())
                  setHistory(Math.PI.toString())
                }
              }}
            >
              <Text style={{ color: 'white' }}>PI</Text>
            </Pressable>
          </View>
          <View style={styles.containerOpRow}>
            <Pressable
              style={styles.padOperatorRight}
              onPress={() => {
                setNumber1(''),
                  setNumber(''),
                  setHistory(''),
                  setOperator(''),
                  setIsLog(false)
              }}
            >
              <Text style={{ color: 'white' }}>C</Text>
            </Pressable>
            <Pressable
              style={styles.padOperatorLeft}
              onPress={() => {
                if (Number(number)) {
                  const test = Math.log2(parseFloat(number))
                  switch (operator) {
                    case '+':
                      if (isLog) {
                        const total = test + parseFloat(number1)
                        setHistory(total.toString())
                        setNumber1(total.toString())
                      } else {
                        setHistory(
                          (parseFloat(number) + parseFloat(number1)).toString()
                        )
                        setNumber1(
                          (parseFloat(number) + parseFloat(number1)).toString()
                        )
                      }
                      setNumber('')
                      break
                    case '*':
                      if (isLog) {
                        const total = test * parseFloat(number1)
                        setHistory(total.toString())
                        setNumber1(total.toString())
                      } else {
                        setHistory(
                          (parseFloat(number) * parseFloat(number1)).toString()
                        )
                        setNumber1(
                          (parseFloat(number) * parseFloat(number1)).toString()
                        )
                      }
                      setNumber('')
                      break
                    case '-':
                      if (isLog) {
                        const total = parseFloat(number1) - test
                        setHistory(total.toString())
                        setNumber1(total.toString())
                      } else {
                        setHistory(
                          (parseFloat(number1) - parseFloat(number)).toString()
                        )
                        setNumber1(
                          (parseFloat(number1) - parseFloat(number)).toString()
                        )
                      }
                      setNumber('')
                      break
                    case '÷':
                      if (isLog) {
                        const total = parseFloat(number1) / test
                        setHistory(total.toString())
                        setNumber1(total.toString())
                      } else {
                        setHistory(
                          (parseFloat(number1) / parseFloat(number)).toString()
                        )
                        setNumber1(
                          (parseFloat(number1) / parseFloat(number)).toString()
                        )
                      }
                      setNumber('')
                      break
                    case '^':
                      if (isLog) {
                        const total = test ** parseFloat(number1)
                        setHistory(total.toString())
                        setNumber1(total.toString())
                      } else {
                        setHistory(
                          (parseFloat(number1) ** parseFloat(number)).toString()
                        )
                        setNumber1(
                          (parseFloat(number1) ** parseFloat(number)).toString()
                        )
                      }
                      setNumber('')
                      break
                    case 'Log':
                      if (Number.isNaN(test)) {
                        setHistory('Infinito')
                        setNumber1('')
                      } else {
                        setHistory(test.toString())
                        setNumber1(test.toString())
                        setNumber('')
                      }
                      break
                  }
                  setIsLog(false)
                  setOperator('')
                }
              }}
            >
              <Text style={{ color: 'white' }}>=</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}
