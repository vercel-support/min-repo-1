import { queryField, nonNull } from 'nexus'

export const FinancialRecordTypeFindUniqueQuery = queryField(
  'findUniqueFinancialRecordType',
  {
    type: 'FinancialRecordType',
    args: {
      where: nonNull('FinancialRecordTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.financialRecordType.findUnique({
        where,
        ...select,
      })
    },
  },
)
