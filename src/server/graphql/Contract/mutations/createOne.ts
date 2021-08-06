import { mutationField, nonNull } from 'nexus'

export const ContractCreateOneMutation = mutationField('createOneContract', {
  type: nonNull('Contract'),
  args: {
    data: nonNull('ContractCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.contract.create({
      data,
      ...select,
    })
  },
})
