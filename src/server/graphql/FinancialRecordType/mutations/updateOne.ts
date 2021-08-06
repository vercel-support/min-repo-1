import { mutationField, nonNull } from 'nexus'

export const FinancialRecordTypeUpdateOneMutation = mutationField(
  'updateOneFinancialRecordType',
  {
    type: nonNull('FinancialRecordType'),
    args: {
      where: nonNull('FinancialRecordTypeWhereUniqueInput'),
      data: nonNull('FinancialRecordTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.financialRecordType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
