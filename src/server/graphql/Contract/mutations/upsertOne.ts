import { mutationField, nonNull } from 'nexus'

export const ContractUpsertOneMutation = mutationField('upsertOneContract', {
  type: nonNull('Contract'),
  args: {
    where: nonNull('ContractWhereUniqueInput'),
    create: nonNull('ContractCreateInput'),
    update: nonNull('ContractUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.contract.upsert({
      ...args,
      ...select,
    })
  },
})
