import { mutationField, nonNull } from 'nexus'

export const FinancialRecordTypeUpsertOneMutation = mutationField(
  'upsertOneFinancialRecordType',
  {
    type: nonNull('FinancialRecordType'),
    args: {
      where: nonNull('FinancialRecordTypeWhereUniqueInput'),
      create: nonNull('FinancialRecordTypeCreateInput'),
      update: nonNull('FinancialRecordTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.financialRecordType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
