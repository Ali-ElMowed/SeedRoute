<?php

//function to be used in all functions for response return
function jsonResponse($status, $code, $data = null)
{
    return response()->json([
        'status' => $status,
        'data' => $data
    ], $code);
}
