import { queryField, nonNull, list } from 'nexus'

export const FinancialRecordTypeFindCountQuery = queryField(
  'findManyFinancialRecordTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'FinancialRecordTypeWhereInput',
      orderBy: list('FinancialRecordTypeOrderByInput'),
      cursor: 'FinancialRecordTypeWhereUniqueInput',
      distinct: 'FinancialRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.financialRecordType.count(args as any)
    },
  },
)
