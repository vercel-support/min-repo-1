import { queryField, list } from 'nexus'

export const FinancialRecordTypeFindFirstQuery = queryField(
  'findFirstFinancialRecordType',
  {
    type: 'FinancialRecordType',
    args: {
      where: 'FinancialRecordTypeWhereInput',
      orderBy: list('FinancialRecordTypeOrderByInput'),
      cursor: 'FinancialRecordTypeWhereUniqueInput',
      distinct: 'FinancialRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialRecordType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
