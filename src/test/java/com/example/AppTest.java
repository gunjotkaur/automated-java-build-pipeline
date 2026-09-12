package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class AppTest {
    @Test
    public void testSubtract() {
        assertEquals(2, App.subtract(5, 3));
    }
}