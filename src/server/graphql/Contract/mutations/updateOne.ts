import { mutationField, nonNull } from 'nexus'

export const ContractUpdateOneMutation = mutationField('updateOneContract', {
  type: nonNull('Contract'),
  args: {
    where: nonNull('ContractWhereUniqueInput'),
    data: nonNull('ContractUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.contract.update({
      where,
      data,
      ...select,
    })
  },
})
