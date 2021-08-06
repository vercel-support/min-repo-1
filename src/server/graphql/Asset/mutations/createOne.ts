import { mutationField, nonNull } from 'nexus'

export const AssetCreateOneMutation = mutationField('createOneAsset', {
  type: nonNull('Asset'),
  args: {
    data: nonNull('AssetCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.asset.create({
      data,
      ...select,
    })
  },
})
