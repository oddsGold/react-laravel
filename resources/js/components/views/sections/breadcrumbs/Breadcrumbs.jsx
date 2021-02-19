import React from "react";
import "./Breadcrumbs.scss";
import {
    Breadcrumbs,
    Typography
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";


export default function CollapsedBreadcrumbs(props) {

    return (
        <div className="content-breadcrumb">
            <Breadcrumbs maxItems={4} className="breadcrumb" aria-label="breadcrumb">
                <RouterLink to="/admin">
                    Home
                </RouterLink>

                {props.pathnames.map((name, index) => {
                    const routeTo = `/${props.pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === props.pathnames.length - 1;
                    return isLast ? (
                        <Typography key={name}>{name}</Typography>
                    ) : (
                        <RouterLink key={name} to={`/admin`+routeTo}>{name}</RouterLink>
                    );
                })}

            </Breadcrumbs>
        </div>
    );
}
