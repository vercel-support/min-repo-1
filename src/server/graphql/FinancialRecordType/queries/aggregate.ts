import { queryField, list } from 'nexus'

export const FinancialRecordTypeAggregateQuery = queryField(
  'aggregateFinancialRecordType',
  {
    type: 'AggregateFinancialRecordType',
    args: {
      where: 'FinancialRecordTypeWhereInput',
      orderBy: list('FinancialRecordTypeOrderByInput'),
      cursor: 'FinancialRecordTypeWhereUniqueInput',
      distinct: 'FinancialRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialRecordType.aggregate({ ...args, ...select }) as any
    },
  },
)
