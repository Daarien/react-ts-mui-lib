import * as React from "react";
import clsx from "clsx";
import withStyles from "../styles/withStyles";

export const styles = theme => {
  const elevations = {};
  theme.shadows.forEach((shadow, index) => {
    elevations[`elevation${index}`] = {
      boxShadow: shadow,
    };
  });

  return {
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create("box-shadow"),
    },
    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius,
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: `1px solid ${theme.palette.divider}`,
    },
    ...elevations,
  };
};

const Paper = React.forwardRef(function Paper(props, ref) {
  const {
    classes,
    className,
    component: Component = "div",
    square = false,
    elevation = 1,
    variant = "elevation",
    ...other
  } = props;

  return (
    <Component
      className={clsx(
        classes.root,
        {
          [classes.rounded]: !square,
          [classes[`elevation${elevation}`]]: variant === "elevation",
          [classes.outlined]: variant === "outlined",
        },
        className
      )}
      ref={ref}
      {...other}
    />
  );
});

export default withStyles(styles, { name: "MuiPaper" })(Paper);
