import { mutationField, nonNull } from 'nexus'

export const FinancialRecordTypeCreateOneMutation = mutationField(
  'createOneFinancialRecordType',
  {
    type: nonNull('FinancialRecordType'),
    args: {
      data: nonNull('FinancialRecordTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.financialRecordType.create({
        data,
        ...select,
      })
    },
  },
)
