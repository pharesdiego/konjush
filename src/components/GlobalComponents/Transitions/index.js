import React from 'react';
import { Transition } from 'react-transition-group';

const FadeAndTranslationTransition = ({children, duration, delay}) => {
  let defaultStyles = {
    transition: duration + 'ms all cubic-bezier(0, 0, 0, 0.93)',
  }
  
  let stylesByTransitionState = {
    entering: {
      opacity: 0,
      transform: 'translateY(15px)'
    },
    entered: {
      opacity: 1,
      transform: 'translateY(0px)',
      transitionDelay: delay + 'ms'
    }
  }

  return (
    <Transition
      in={true}
      appear={true}
      timeout={0}
    >
    {
      transitionState => React.cloneElement(children, {
        style: { ...defaultStyles, ...stylesByTransitionState[transitionState] }
      })
    }

    </Transition>
  )
}

export default FadeAndTranslationTransition;