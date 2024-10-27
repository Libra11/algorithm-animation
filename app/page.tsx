/**
 * Author: Libra
 * Date: 2024-10-23 22:31:37
 * LastEditors: Libra
 * Description:
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DetailedMedianSortedArrays } from "@/components/detailed-median-sorted-arrays";
import { EnhancedLongestPalindromeSubstring } from "@/components/enhanced-longest-palindrome-substring";
import { ZigZagConversion } from "@/components/zigzag-conversion";

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">算法可视化</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="palindrome">
          <AccordionTrigger className="text-xl font-semibold hover:no-underline">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🔍</span>
              <div className="text-left">
                <h3 className="font-bold">最长回文子串</h3>
                <p className="text-sm text-muted-foreground">
                  通过中心扩展法查找字符串中的最长回文子串
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-4">
              <EnhancedLongestPalindromeSubstring />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="median">
          <AccordionTrigger className="text-xl font-semibold hover:no-underline">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📊</span>
              <div className="text-left">
                <h3 className="font-bold">寻找两个正序数组的中位数</h3>
                <p className="text-sm text-muted-foreground">
                  在两个有序数组中高效查找中位数
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-4">
              <DetailedMedianSortedArrays />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="zigzag">
          <AccordionTrigger className="text-xl font-semibold hover:no-underline">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🔄</span>
              <div className="text-left">
                <h3 className="font-bold">Z字形变换</h3>
                <p className="text-sm text-muted-foreground">
                  通过模拟Z字形变换过程，将字符串转换为指定行数的Z字形
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-4">
              <ZigZagConversion />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
