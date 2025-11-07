interface StyleRule extends CSSRule {
    type: number
    style: CSSStyleDeclaration
  }
  
  interface CustomStyleSheet extends StyleSheet {
    href: string | null // Changed from href?: string
    cssRules: CSSRuleList
  }
  
  const isStyleRule = (rule: CSSRule): rule is StyleRule => rule.type === 1
  
  const isSameDomain = (styleSheet: CustomStyleSheet): boolean => {
    if (!styleSheet.href) {
      return true
    }
  
    return styleSheet.href.indexOf(window.location.origin) === 0
  }
  
  type ColorProperty = [string, string] // [propertyName, propertyValue]
  
  const getCSSCustomPropIndex = (): ColorProperty[] =>
    [...document.styleSheets].filter(isSameDomain).reduce<ColorProperty[]>(
      (finalArr, sheet) =>
        finalArr.concat(
          [...(sheet as CustomStyleSheet).cssRules]
            .filter(isStyleRule)
            .reduce<ColorProperty[]>((propValArr, rule) => {
              const props = [...rule.style]
                .map(
                  (propName) =>
                    [propName.trim(), rule.style.getPropertyValue(propName).trim()] as ColorProperty
                )
                .filter(([propName]) => propName.indexOf('--ds') === 0)
  
              return [...propValArr, ...props]
            }, [])
        ),
      []
    )
  
  interface ColorVariables {
    [colorType: string]: {
      [shade: string]: string
    }
  }
  
  export const getColors = (colorRange: string): ColorVariables => {
    const colorsArray = getCSSCustomPropIndex()
    const colorVariables: ColorVariables = {}
  
    colorsArray.forEach(([varName, colorValue]) => {
      const strippedName = varName.replace(`--ds-color-${colorRange}-`, '')
      const [colorType, colorShade] = strippedName.split('-')
  
      if (!colorVariables[colorType]) {
        colorVariables[colorType] = {}
      }
  
      colorVariables[colorType][colorShade] = colorValue
    })
  
    return colorVariables
  }  