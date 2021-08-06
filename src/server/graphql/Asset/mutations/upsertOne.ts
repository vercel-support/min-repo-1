import { mutationField, nonNull } from 'nexus'

export const AssetUpsertOneMutation = mutationField('upsertOneAsset', {
  type: nonNull('Asset'),
  args: {
    where: nonNull('AssetWhereUniqueInput'),
    create: nonNull('AssetCreateInput'),
    update: nonNull('AssetUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.asset.upsert({
      ...args,
      ...select,
    })
  },
})
