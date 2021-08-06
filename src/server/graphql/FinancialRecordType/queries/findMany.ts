import { queryField, nonNull, list } from 'nexus'

export const FinancialRecordTypeFindManyQuery = queryField(
  'findManyFinancialRecordType',
  {
    type: nonNull(list(nonNull('FinancialRecordType'))),
    args: {
      where: 'FinancialRecordTypeWhereInput',
      orderBy: list('FinancialRecordTypeOrderByInput'),
      cursor: 'FinancialRecordTypeWhereUniqueInput',
      distinct: 'FinancialRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialRecordType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
