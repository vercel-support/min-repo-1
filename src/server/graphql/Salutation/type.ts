import { objectType } from 'nexus'

export const Salutation = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Salutation',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('CampaignMemberSalutation', {
      type: 'CampaignMember',
      args: {
        where: 'CampaignMemberWhereInput',
        orderBy: 'CampaignMemberOrderByInput',
        cursor: 'CampaignMemberWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CampaignMemberScalarFieldEnum',
      },
      resolve(root: any) {
        return root.CampaignMemberSalutation
      },
    })
    t.nullable.field('_count', {
      type: 'SalutationCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
