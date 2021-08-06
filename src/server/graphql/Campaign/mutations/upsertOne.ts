import { mutationField, nonNull } from 'nexus'

export const CampaignUpsertOneMutation = mutationField('upsertOneCampaign', {
  type: nonNull('Campaign'),
  args: {
    where: nonNull('CampaignWhereUniqueInput'),
    create: nonNull('CampaignCreateInput'),
    update: nonNull('CampaignUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.campaign.upsert({
      ...args,
      ...select,
    })
  },
})
